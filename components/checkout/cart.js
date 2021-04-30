import React from 'react';
import {Card, DisplayText, Layout, Stack} from '@shopify/polaris';

const Cart = (props) => {
  let totalItemCount = 0;
  let item = "items";
  let subTotal = 0;
  let shipping = 0;
  let salesTax = 0;
  let orderTotal = 0;
  props.cart.map((lineItem) => {
    const {quantity, product} = lineItem;
    subTotal += (quantity * product.node.variants.edges[0].node.price);
    totalItemCount += quantity;
  });
  if (totalItemCount === 1) {
    item = "item";
  }
  salesTax = subTotal * .0775;
  orderTotal = subTotal + shipping + salesTax;
  return (
    <Layout.Section secondary>
      <Card title="Cart">
        <Card.Section>
          <Stack>
            <Stack.Item fill>
              <DisplayText size="small">Subtotal ({totalItemCount} {item})</DisplayText>
            </Stack.Item>
            <Stack.Item>
              <DisplayText size="small">${subTotal.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2})}</DisplayText>
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item fill>
              <DisplayText size="small">Shipping</DisplayText>
            </Stack.Item>
            <Stack.Item>
              <DisplayText size="small">${shipping.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2})}</DisplayText>
            </Stack.Item>
          </Stack>
          <Stack>
            <Stack.Item fill>
              <DisplayText size="small">Sales tax</DisplayText>
            </Stack.Item>
            <Stack.Item>
              <DisplayText size="small">${salesTax.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2})}</DisplayText>
            </Stack.Item>
          </Stack>
        </Card.Section>
        <Card.Section>
          <Stack>
            <Stack.Item fill>
              <DisplayText size="medium">Order total</DisplayText>
            </Stack.Item>
            <Stack.Item>
              <DisplayText size="medium">${orderTotal.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2})}</DisplayText>
            </Stack.Item>
          </Stack>
        </Card.Section>
      </Card>
    </Layout.Section>
  );
}
export default Cart;
