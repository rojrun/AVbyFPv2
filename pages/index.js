import React from 'react';
import {Layout, Page} from '@shopify/polaris';
import ProductTypeCategories from '../components/productTypeCategories.js';

const Index = () => {
  return (
    <Page fullWidth title="Product Search">
      <Layout>  
        <ProductTypeCategories productType="audio mixer"/>
        <ProductTypeCategories productType="headphone"/>
        <ProductTypeCategories productType="microphone"/>
      </Layout> 
    </Page>
  ); 
}
export default Index;
