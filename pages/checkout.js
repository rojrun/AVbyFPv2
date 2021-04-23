import React from 'react';
import {Page, Layout} from '@shopify/polaris';
import store from 'store-js';
import CustomerInfoForm from '../components/checkout/customerInfoForm.js';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }

  componentDidMount() {
    this.setState({cart: store.get('cart')});
  }

  render() {
    return (
      <Page title="Checkout">
        <Layout>
          <CustomerInfoForm/>
        </Layout>
      </Page>
    );
  }
}
export default Checkout;
