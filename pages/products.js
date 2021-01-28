import React from 'react';
import {Query} from 'react-apollo';
import {Page} from '@shopify/polaris';
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
    
    // Makes products array for object, with vendor as keys
    const productsList = {};
    vendorKeys.map((vendor) => {
      const products = data.products.edges.filter((product) => product.node.vendor === vendor);
      productsList[vendor] = products;
    });
    
    if (this.state.isFirstRender) {
      this.setState({
        productsList, 
        isFirstRender: false,
        // productToDisplay: (productsList[Object.keys(productsList)[0]])[0]
      }, () => {
        this.setState({
          productToDisplay: (this.state.productsList[Object.keys(this.state.productsList)[0]])[0]
        });
      });
    }
  }

  render() {
    const productType = store.get('productType');
    const productTypeObj = {};
    productTypeObj.product_type = `product_type:${productType} status:ACTIVE inventory_total:>0`;
    
    return (
      <Query 
        query={GET_PRODUCTS_BY_PRODUCT_TYPE}
        variables={productTypeObj}
        onCompleted={(data) => { console.log("data received");this.restructureData(data)}}
      >
        {({data, loading, error}) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>{error.message}</div>;
          
          return (
            <Page title={`${(productType + 's').toUpperCase()}`} fullWidth> 
              <ProductResults productsList={this.state.productsList} originalDataListCount={data.products.edges.length}/>
              {/* {console.log("productResults rendered. productToDisplay: ", this.state.productToDisplay)} */}
              {/* <ProductDetails productToDisplay={this.state.productToDisplay} wait={10000}/> */}
            </Page>
          );    
        }}
      </Query>
    );  
  }
}    
export default Products;
