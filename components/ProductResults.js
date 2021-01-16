import React from 'react';
import {Card, ResourceList, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page, ResourceItem} from '@shopify/polaris';

class ProductResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("props: ", this.props);
    return (
      <Card title={`Results | Showing ${this.props.filteredProductResults.length} products`}>
        {
          this.props.vendors.map((vendor) => {
            const products = this.props.filteredProductResults.filter((product) => product.node.vendor === vendor);
            const firstProduct = products[0];
            return (           
              <Card.Section title={firstProduct.node.vendor}>
                <ResourceList
                  resourceName={{singular: 'product', plural: 'products'}}
                  items={products}
                  renderItem={(product) => {
                    const media = <Thumbnail
                      source={product.node.images.edges[0].node.originalSrc}
                      size="small"
                      alt={product.node.images.edges[0].node.altText}
                    />  
                    return (
                      <ResourceItem
                        id={(product.node.id).slice(-13)}
                        media={media}  
                      >
                        <h3>
                          <TextStyle variation="strong">{product.node.title}</TextStyle>
                        </h3>
                        <p>${product.node.variants.edges[0].node.price}</p>
                      </ResourceItem>
                    );
                  }}
                />  
              </Card.Section>
            )
          }) 
        }      
      </Card>
    );
  }
}
export default ProductResults;
