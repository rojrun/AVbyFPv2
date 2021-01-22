import React from 'react';
import {Query} from 'react-apollo';
import {Page} from '@shopify/polaris';
import store from 'store-js';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';
import ProductResults from '../components/productResults.js';
import ProductDetails from '../components/productDetails.js';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: {},
      productToDisplay: {}
    }
  }
  
  render() {
    const productTypeVar = store.get('productType');
    const productTypeObj = {};
    productTypeObj.product_type = productTypeVar;
    
    return (
      <Page title={`${(productTypeVar + 's').toUpperCase()}`} fullWidth> 
        <Query query={GET_PRODUCTS_BY_PRODUCT_TYPE} variables={productTypeObj}>
          {({data, loading, error}) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>{error.message}</div>;

            // Filter out product with no inventory
            const filteredProductResults = (data.products.edges).filter((product) => product.node.totalInventory > 0);
            
            // Searches for vendor to use as keys in productsList
            const vendorKeys = filteredProductResults.reduce((allProducts, current) => {
              return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]);
            }, []);
            vendorKeys.sort();
            
            // Makes products array for object, with vendor as keys
            vendorKeys.map((vendor) => {
              const products = filteredProductResults.filter((product) => product.node.vendor === vendor);
              this.setState({
                productsList: this.state.productsList[vendor] = products
              });
            });
            
            return (
              <ProductResults productsList={this.state.productsList} filteredProductResults={filteredProductResults}/>
            );    
          }}
        </Query>
        {/* <ProductDetails /> */}
      </Page>    
    );  
  }
}    
export default Products;
