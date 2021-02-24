import React from 'react';
import {Layout, Page} from '@shopify/polaris';
import ProductTypeCategories from '../components/productTypeCategories.js';
import ProductApplication from '../components/productApplication.js';

const Index = () => {
  return (
    <Page fullWidth title="
    ">
      <Layout>  
        <ProductApplication title="Connect ..."/>
        <ProductApplication title="Perform ..."/>
        <ProductApplication title="Create ..."/>
        <ProductApplication title="Present ..."/>
        <ProductApplication title="Entertain ..."/>
        <ProductApplication title="Deals ..."/>
        {/* <ProductTypeCategories productType="audio mixer"/>
        <ProductTypeCategories productType="headphone"/>
        <ProductTypeCategories productType="microphone"/> */}
      </Layout> 
    </Page>
  ); 
}
export default Index;
