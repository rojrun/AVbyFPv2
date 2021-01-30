import React from 'react';
import {Query} from 'react-apollo';
import {Card, Page} from '@shopify/polaris';
import store from 'store-js';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';
import ProductResults from '../components/productResults.js';

const Products = () => {
  const productType = store.get('productType');
  const productTypeObj = {};
  productTypeObj.product_type = `product_type:${productType} status:ACTIVE inventory_total:>0`;
  return (
    <Query query={GET_PRODUCTS_BY_PRODUCT_TYPE} variables={productTypeObj}>
      {({data, loading, error}) => {
        if (loading) return <Card>Loading ...</Card>;
        if (error) return <Card>{error.message}</Card>;   
        return (
          <Page title={`${(productType + 's').toUpperCase()}`} fullWidth> 
            <ProductResults data={data} originalDataListCount={data.products.edges.length}/>
          </Page>
        );    
      }}
    </Query>
  );  
}
export default Products;
