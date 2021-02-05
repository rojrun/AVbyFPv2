import React from 'react';
import {Card, EmptyState, Layout, Page, Button, ButtonGroup, DisplayText, Link} from '@shopify/polaris';
import {Query} from 'react-apollo';
import {ResourcePicker, TitleBar} from '@shopify/app-bridge-react';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import ProductTypeCategories from '../components/productTypeCategories.js';

class Index extends React.Component {
  static contextType = Context;
 
  // redirectToProducts = () => {
  //   const app = this.context;
  //   const redirect = Redirect.create(app);
  //   redirect.dispatch(
  //     Redirect.Action.APP,
  //     '/products',
  //   );   
  // };
  
  render() {
    const app = this.context;
    const redirect = Redirect.create(app);
    redirect.dispatch(
      Redirect.Action.APP,
      '/products',
    );   
    
    return (
      <Page fullWidth title="Product Search">
        <Layout>
          <ProductTypeCategories productType="audio mixer" />
          <ProductTypeCategories productType="case" />
          <ProductTypeCategories productType="headphone" />
          <ProductTypeCategories productType="microphone" />
          {/* <Layout.Section>
            <Card sectioned>
              <Link 
                onClick={() => {
                  store.remove('productType');
                  store.set('productType', 'microphone');
                  redirectToProducts();
                }}
              >
                Microphones
              </Link>
            </Card>
          </Layout.Section> */}
        </Layout>
      </Page>
    );
  }  
}
export default Index;
