import React from 'react';
import store from 'store-js';
import {Card, Page, Layout, ResourceItem, ResourceList} from '@shopify/polaris';

class Cart extends React.Component {
  
  
  render() {
    const cart = store.get('cart');
    console.log("cart: ", cart);
    return (
      <Page title="Cart">
        <Layout>
          <Layout.Section oneHalf>
            <Card>  
              {/* {
                !cart
                ? <h1>Cart is empty</h1> 
                : cart.map(([key, values]) => {
                  return (
                    <Card.Section key={key}>
                      <ResourceList
                        resourceName={{singular: 'lineItem', plural: 'lineItems'}}
                        items={values}
                        totalItemsCount={values.length}
                        renderItem={(value) => {
                          console.log("value: ", value);
                        }}
                      />
                    </Card.Section>
                  )
                })  
              }           */}
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>

            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}
export default Cart;
