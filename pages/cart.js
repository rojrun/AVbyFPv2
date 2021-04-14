import React from 'react';
import store from 'store-js';
import {Button, Card, DisplayText, Page, Layout, ResourceItem, ResourceList, Thumbnail, Stack} from '@shopify/polaris';

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
  
  render() {
    return (
      <Page title="Cart">
        <Layout>
          <Layout.Section oneHalf>
            <Card>  
              {
                !this.state.cart.length
                ? <h1>Cart is empty</h1> 
                : this.state.cart.map((lineItem, index) => {
                  // const {product, quantity} = lineItem;
                  // const source = product.node.images.edges.filter((image) => {
                  //   return image.node.altText === product.node.variants.edges[0].node.title;
                  // });
                  // return (
                  //   <Card.Section key={index}>
                  //     <Stack wrap={false} distribution="fillEvenly">
                  //       <Stack.Item style={{width: "50%"}}>
                  //         <img src={
                  //           !product.node.hasOnlyDefaultVariant
                  //           ? !source.length
                  //             ? product.node.images.edges[0].node.originalSrc
                  //             : source[0].node.originalSrc
                  //           : product.node.images.edges[0].node.originalSrc  
                  //         }
                  //         />
                  //       </Stack.Item>                       
                  //       <Stack.Item style={{width: "50%"}}>
                  //         <DisplayText size="large" element="h2">{product.node.title}</DisplayText>  
                  //       </Stack.Item>                   
                  //     </Stack>
                  //   </Card.Section>
                  // );



                  return (
                    <Card.Section key={index}>
                      <ResourceList
                        resourceName={{singular: 'lineItem', plural: 'lineItems'}}
                        items={[lineItem]}
                        totalItemsCount={lineItem.length}
                        renderItem={(lineItem) => {
                          console.log("value: ", lineItem);
                          const {product, quantity} = lineItem;
                          const source = product.node.images.edges.filter((image) => {
                            return image.node.altText === product.node.variants.edges[0].node.title;
                          });
                          const media = <Thumbnail
                            source={
                              !product.node.hasOnlyDefaultVariant
                              ? !source.length
                                ? product.node.images.edges[0].node.originalSrc
                                : source[0].node.originalSrc
                              : product.node.images.edges[0].node.originalSrc  
                            }
                            size="large"
                            alt={product.node.images.edges[0].node.altText}
                          />;
                          const price = product.node.variants.edges[0].node.price;
                          return (
                            <ResourceItem
                              id={product.node.id}
                              key={product.node.id}
                              media={media}
                              accessibilityLabel={`View details for ${product.node.title}`}
                            >
                              <DisplayText size="large" element="h2">{product.node.title}</DisplayText>
                              {
                                !product.node.hasOnlyDefaultVariant
                                ? <DisplayText size="medium">{product.node.variants.edges[0].node.title}</DisplayText>
                                : null
                              }
                              <DisplayText size="small">${price}</DisplayText>
                              <DisplayText size="small">Quantity:&nbsp;{quantity}</DisplayText>
                              <Button>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve">
                                  <g id="trash">
                                    <path clipRule="evenodd" d="M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001   c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17   c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10   c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002   c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z" fill="#333333" fillRule="evenodd"/>
                                    <path clipRule="evenodd" d="M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9   c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z" fill="#333333" fillRule="evenodd"/>
                                    <path clipRule="evenodd" d="M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2   c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z" fill="#333333" fillRule="evenodd"/>
                                    <path clipRule="evenodd" d="M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2   c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z" fill="#333333" fillRule="evenodd"/>
                                  </g>
                                </svg>
                                <DisplayText size="small">Remove</DisplayText>
                              </Button>
                            </ResourceItem>
                          );
                        }}
                      />
                    </Card.Section>
                  );
                })  
              }          
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
