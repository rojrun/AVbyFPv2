import React from 'react';
import store from 'store-js';
import {Page, Layout} from '@shopify/polaris';
import LineItems from '../components/cart/lineItems.js';
import Summary from '../components/cart/summary.js';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }

  componentDidMount() {
    this.setState({cart: store.get('cart')});
  }
  
  updateParentState = () => {
    this.setState({cart: store.get('cart')});
  }
  
  render() {
    let totalItemCount = 0;
    let item = "items";
    this.state.cart.map((lineItem) => {
      totalItemCount += lineItem.quantity;
    });
    if (totalItemCount === 1) {
      item = "item";
    }
    return (
      <Page title={`Shopping Cart | ${totalItemCount} ${item}`}>
        <Layout>
          <LineItems cart={this.state.cart} updateParentState={this.updateParentState}/>
          <Summary cart={this.state.cart}/>
        </Layout>
      </Page>
    );
  }
}
export default Cart;
