import React from 'react';
import store from 'store-js';
import {Page, Layout} from '@shopify/polaris';
import CartLineItems from '../components/cartLineItems.js';
import CartSummary from '../components/cartSummary.js';
import '../scss/_cart.module.scss';

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
    let item = "item";
    this.state.cart.map((lineItem) => {
      totalItemCount += lineItem.quantity;
    });
    if (totalItemCount > 1) {
      item = "items";
    }
    return (
      <div id="cart">
        <Page title={`Shopping Cart | ${totalItemCount} ${item}`}>
          <Layout>
            <CartLineItems cart={this.state.cart} updateParentState={this.updateParentState}/>
            {/* <CartSummary cart={this.state.cart}/> */}
          </Layout>
        </Page>
      </div>
    );
  }
}
export default Cart;
