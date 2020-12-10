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

const GET_PRODUCTS_BY_TYPE = gql`
  query {
    products(first: 20, query: "product_type:microphone") {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          } 
          productType
          totalInventory
          vendor
          variants(first: 1) {
            edges {
              node {
                price
                id
              }
            }
          }
        }
      }
    }
  }
`;  

class Microphones extends React.Component {
  static contextType = Context;

  render() {
    
    return (
      <Query query={GET_PRODUCTS_BY_TYPE}>
        {({data, loading, error}) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>{error.message}</div>;
          console.log('data ', data);
          
          return (
            <Card>
              <ResourceList
                showHeader
                resourceName={{singular: 'Product', plural: 'Products'}}
                items={data.nodes}
                renderItem={item => {
                  const media = (
                    <Thumbnail
                      source={
                        item.images.edges[0]
                          ? item.images.edges[0].node.originalSrc
                          : ''
                      }
                      alt={
                        item.images.edges[0]
                        ? item.images.edges[0].node.altText
                        : ''
                      }
                    />
                  );
                  const price = item.variants.edges[0].node.price;

                  return (
                    <ResourceList.Item
                      id={item.id}
                      media={media}
                      accessibilityLabel={`View details for ${item.title}`}            
                    >
                      <Stack>
                        <Stack.Item>
                          <h3>
                            <TextStyle variation="strong">
                              {item.title}
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

export default Microphones;