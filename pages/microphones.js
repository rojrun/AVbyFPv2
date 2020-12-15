import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Card, ResourceList, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';

class Microphones extends React.Component {
  static contextType = Context;

  render() { 
    return (
      <Page title="Microphones" fullWidth>
        <Query query={GET_PRODUCTS_BY_PRODUCT_TYPE} variables={{product_type: "microphone"}}>
            {({data, loading, error}) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error.message}</div>;
              
              const productResults = data.products.edges;
              console.log("productResults: ", productResults);
              productResults.map(product => {
                console.log("single product: ", product);
                const productVendor = product.node.vendor;
                console.log("productVendor: ", productVendor);

                var prodATCategory = {}, 
                    prodNeumannCategory = {},
                    prodSennheiserCategory = {}, 
                    prodShureCategory = {};    

                switch (productVendor) {
                  case 'Audio-Technica':
                    prodATCategory = product;
                    // audioTechnica.push(product);
                    console.log("AT: ", prodATCategory.node.title);
                    break;
                  case 'Neumann':
                    prodNeumannCategory = product;
                    // neumann.push(product);
                    // console.log("neumann: ", neumann);
                    break;
                  case 'Sennheiser':
                    prodSennheiserCategory = product;
                    // sennheiser.push(product);
                    // console.log("sennheiser: ", sennheiser);
                    break;
                  case 'Shure':
                    prodShureCategory = product;
                    // shure.push(product);
                    // console.log('shure: ', shure);
                    break;
                }
                console.log("AT: ", prodATCategory.node.title);
                return (
                  <Layout>
                    <Layout.Section primary>
                      <Card title="Results">
                        <Card.Section title="Audio-Technica">
                          <MediaCard
                            title={prodATCategory.node.title}
                            description={prodATCategory.node.handle}
                            size="small"
                          >
                            <img
                              alt={prodATCategory.node.images.edges[0].node.altText || ""}
                              width="100%"
                              height="100%"
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                              }}
                              src={prodATCategory.node.images.edges[0].node.originalSrc}
                            />
                          </MediaCard>
                        </Card.Section>  
                        <Card.Section title="Neumann">
                          <Card>
                            {prodNeumannCategory}
                          </Card>
                        </Card.Section> 
                        <Card.Section title="Sennheiser">
                          <Card>
                            {prodSennheiserCategory}
                          </Card>
                        </Card.Section>
                        <Card.Section title="Shure">
                          <Card>
                            {prodShureCategory}
                          </Card>
                        </Card.Section>            
                      </Card>
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
              });
            }}
        </Query>
      </Page>
    );  
  };
}
export default Microphones;

 {/* <Query query={GET_PRODUCTS_BY_PRODUCT_TYPE} variables={{product_type: "microphone"}}>
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
        </Query> */}