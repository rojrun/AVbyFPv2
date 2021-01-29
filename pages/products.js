import React from 'react';
import {Query} from 'react-apollo';
import {Card, Page} from '@shopify/polaris';
import store from 'store-js';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';
import ProductResults from '../components/productResults.js';
import ProductDetails from '../components/productDetails.js';

class Products extends React.Component {
  state = {
    productsList: {},
    productToDisplay: {},
    isFirstRender: true
  }

  restructureData(data) {
     // Searches for vendor to use as keys in productsList
     const vendorKeys = data.products.edges.reduce((allProducts, current) => {
      return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]);
    }, []);
    vendorKeys.sort();
    
    // Makes products array for vendor keys
    const productsList = {};
    vendorKeys.map((vendor) => {
      const products = data.products.edges.filter((product) => product.node.vendor === vendor);
      productsList[vendor] = products;
    });
    
    if (this.state.isFirstRender) {
      this.setState({
        productsList, 
        isFirstRender: false,
        productToDisplay: (productsList[Object.keys(productsList)[0]])[0]
      });
    }
  }

  handleProductDetails = (product) => {
    this.setState({
      productToDisplay: product
    });
  }

  render() {
    const productType = store.get('productType');
    const productTypeObj = {};
    productTypeObj.product_type = `product_type:${productType} status:ACTIVE inventory_total:>0`;
    
    return (
      <Query 
        query={GET_PRODUCTS_BY_PRODUCT_TYPE}
        variables={productTypeObj}
        onCompleted={(data) => {this.restructureData(data)}}
      >
        {({data, loading, error}) => {
          if (loading) return <Card>Loading ...</Card>;
          if (error) return <Card>{error.message}</Card>;
          
          return (
            <Page title={`${(productType + 's').toUpperCase()}`} fullWidth> 
              <ProductResults
                productsList={this.state.productsList}
                originalDataListCount={data.products.edges.length}
                handleProductDetails={this.handleProductDetails} 
              />
              <ProductDetails productToDisplay={this.state.productToDisplay}/>
            </Page>
          );    
        }}
      </Query>
    );  
  }
}    
export default Products;
