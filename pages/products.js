import React from 'react';
import {Query} from 'react-apollo';
import {Card, ResourceList, ResourceItem, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page, Avatar} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';
import ProductResults from '../components/productResults.js';

class Products extends React.Component {
  // static contextType = Context;
  
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

            // Filter out product with low inventory
            const filteredProductResults = (data.products.edges).filter((product) => product.node.totalInventory > 0);
            
            // Searches for vendor to use as keys in sortedProductsObj
            const vendorKeys = filteredProductResults.reduce((allProducts, current) => {
              return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]);
            }, []);
            vendorKeys.sort();
            
            const sortedProductsObj = {};
            vendorKeys.map((vendor) => {
              const products = filteredProductResults.filter((product) => product.node.vendor === vendor);
              sortedProductsObj[vendor] = products;
            });

            return (
              <ProductResults sortedProductsObj={sortedProductsObj} filteredProductResults={filteredProductResults}/>
            );    
          }}
        </Query>
      </Page>    
    );  
  }
}    
export default Products;
