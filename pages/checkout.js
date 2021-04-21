import React from 'react';
import {Page, Layout, Stack} from '@shopify/polaris';
import store from 'store-js';
import CheckoutCustomerInfo from '../components/checkoutCustomerInfo.js';

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
          <CheckoutCustomerInfo/>
        </Layout>
      </Page>
    );
  }
}
export default Checkout;
