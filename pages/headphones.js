import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {
  Card,
  ResourceList,
  Stack,
  TextStyle,
  Thumbnail
} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';

class Headphones extends React.Component {
  static contextType = Context;

  render() {
      
    return (
      <Query query={GET_PRODUCTS_BY_PRODUCT_TYPE} variables={{product_type: "headphones"}}>
        {({data, loading, error}) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>{error.message}</div>;
          console.log('data ', data.products.edges);
          
          return (
            <Card>
              <ResourceList
                showHeader
                resourceName={{singular: 'Product', plural: 'Products'}}
                items={data.products.edges}
                renderItem={item => {
                  console.log("item ", item);
                  const media = (
                    <Thumbnail
                      source={
                        item.node.images.edges[0]
                          ? item.node.images.edges[0].node.originalSrc
                          : ''
                      }
                      alt={
                        item.node.images.edges[0]
                        ? item.node.images.edges[0].node.altText
                        : ''
                      }
                    />
                  );
                  const price = item.node.variants.edges[0].node.price;

                  return (
                    <ResourceList.Item
                      id={item.node.id}
                      media={media}
                      accessibilityLabel={`View details for ${item.node.title}`}            
                    >
                      <Stack>
                        <Stack.Item>
                          <h3>
                            <TextStyle variation="strong">
                              {item.node.title}
                            </TextStyle>
                          </h3>
                        </Stack.Item>
                        <Stack.Item>
                          <p>${price}</p>
                        </Stack.Item>
                      </Stack>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card>
          );
        }}
      </Query>
    );
  };
}

export default Headphones;