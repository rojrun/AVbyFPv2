import React from 'react';
import {Page, Layout} from '@shopify/polaris';
import store from 'store-js';
import CustomerInfoForm from '../components/checkout/customerInfoForm.js';
import Cart from '../components/checkout/cart.js';

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
          <CustomerInfoForm cart={this.state.cart}/>
          <Cart cart={this.state.cart}/>
        </Layout>
      </Page>
    );
  }
}
export default Checkout;
