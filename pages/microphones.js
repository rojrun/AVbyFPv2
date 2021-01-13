import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Card, ResourceList, ResourceItem, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page, Avatar} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';
import ProductResults from '../components/ProductResults.js';

class Microphones extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <Page title="Microphones" fullWidth>
        <Query query={GET_PRODUCTS_BY_PRODUCT_TYPE} variables={{product_type: "microphone"}}>
            {({data, loading, error}) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error.message}</div>;
              
              const productResults = data.products.edges;       
                return (
                  <Layout>
                    <Layout.Section primary>
                      <Card title="Results">
                        <Card.Section title="Vendors">
                          <ResourceList
                            resourceName={{singular: 'product', plural: 'products'}}
                            items={productResults}
                            renderItem={(item) => {
                              const media = <Thumbnail
                                source={item.node.images.edges[0].node.originalSrc}
                                size="small"
                                alt={item.node.images.edges[0].node.altText}
                              />  
                              return (
                                <ResourceItem
                                  id={item.node.id}
                                  media={media}  
                                >
                                  <h3>
                                    <TextStyle variation="strong">{item.node.title}</TextStyle>
                                  </h3>
                                  <p>${item.node.variants.edges[0].node.price}</p>
                                </ResourceItem>
                              );
                            }}
                            showHeader
                            totalItemsCount={productResults.length}
                          />  
                        </Card.Section>      
                      </Card>
                      {/* <ProductResults id={product.node.id} image={product.node.images} title={product.node.title} variants={product.node.variants} vendor={product.node.vendor}/> */}
                    </Layout.Section>
                    <Layout.Section secondary>
                      <Card title="Filters">
                        <Card.Section>
                          <p>filter</p>
                        </Card.Section>
                      </Card>
                    </Layout.Section>
                    <Layout.Section fullWidth>
                      <Card title="Product Details">
                        <p>details</p>
                      </Card>
                    </Layout.Section>
                  </Layout>  
                );            
              // });
            }}
        </Query>
      </Page>    
    );  
  };
}
export default Microphones;
