import React from 'react';
import {Card, EmptyState, Layout, Page, Button, ButtonGroup, DisplayText, Link} from '@shopify/polaris';
import {Query} from 'react-apollo';
import {ResourcePicker, TitleBar} from '@shopify/app-bridge-react';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';

class Index extends React.Component {
  static contextType = Context;
 
  render() {
    const app = this.context;
    const redirectToProducts = () => {
      const redirect = Redirect.create(app);
      redirect.dispatch(
        Redirect.Action.APP,
        '/products',
      );   
    };
    
    return (
      <Page fullWidth title="Product Search">
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Link 
                onClick={() => {
                  store.remove('productType');
                  store.set('productType', 'headphone');
                  redirectToProducts();
                }}
              >
                Headphones
              </Link>
            </Card>
          </Layout.Section>
          <Layout.Section>
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
          </Layout.Section>
        </Layout>
      </Page>
    );
  }  
}
export default Index;
