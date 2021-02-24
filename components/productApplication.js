import React from 'react';
import {Card, Layout, Link} from '@shopify/polaris';
import MainMenu from '../components/mainMenu.js';

const ProductApplication = (props) => {
  return (
    <Layout.Section secondary>
      <Card sectioned title={props.title}>
        <MainMenu text="with other from HOME"/>
      </Card>
    </Layout.Section>
  );
}
export default ProductApplication;
