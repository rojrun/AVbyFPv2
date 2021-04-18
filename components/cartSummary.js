import React from 'react';
import {Button, Card, DisplayText, Page, Layout, Stack, TextStyle} from '@shopify/polaris';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    console.log("cartSummary props: ", this.props);
  }

  checkout = () => {
    console.log("checkout clicked");
  }

  render() {
    let estimatedTotal = 0;
    this.state.cart.map((lineItem) => {
      const {quantity, product} = lineItem;
      estimatedTotal += (quantity * product.node.variants.edges[0].node.price);
    });
    return (
      <Layout.Section oneHalf>
        <Card title="Order Summary">
          <Card.Section>
            <Stack>
              <Stack.Item fill>
                <DisplayText size="medium">Estimated Total</DisplayText>
              </Stack.Item>
              <Stack.Item>
                <DisplayText size="medium">${estimatedTotal.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2})}</DisplayText>
              </Stack.Item> 
            </Stack>
            <DisplayText size="small">(before tax/shipping)</DisplayText>
            <br/>
            <Button
              fullWidth
              onClick={() => {this.checkout()}}
            >Checkout now</Button>
          </Card.Section>
        </Card>
      </Layout.Section>
    );
  }
}
export default CartSummary;
