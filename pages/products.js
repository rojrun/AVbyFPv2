import React from 'react';
import {Query} from 'react-apollo';
import {Card, Page} from '@shopify/polaris';
import store from 'store-js';
import GET_PRODUCTS_BY_TYPE from '../graphQL/getProductsByType.js';
import Results from '../components/products/results.js';

const Products = () => {
  const tag = store.get('tag');
  const productTypeObj = {};
  productTypeObj.tag = `tag:${tag} status:ACTIVE inventory_total:>0`;
  return (
    <Query query={GET_PRODUCTS_BY_TYPE} variables={productTypeObj} ssr={false}>
      {({data, loading, error}) => {
        if (loading) return <Card title="Loading ..."></Card>;
        if (error) return <Card>{error.message}</Card>;
        if (data.products.edges.length) {
          return (
            <Page title={tag.toUpperCase()} fullWidth> 
              <Results data={data}/>
            </Page>
          );   
        } 
        return (
          <Page>
            <Card title="No search results"></Card>
          </Page>
        );
      }}
    </Query>
  );  
}
export default Products;
