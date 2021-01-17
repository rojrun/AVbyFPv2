import React from 'react';
import {Card, ResourceList, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page, ResourceItem} from '@shopify/polaris';
import ProductDetails from '../components/productDetails.js';

// Child component from Project Page. Dynamically categorizes products into groups by vendor.
class ProductResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
                    renderItem={(item) => {
                      const {title, variants} = item.node;
                      const media = <Thumbnail
                        source={item.node.images.edges[0].node.originalSrc}
                        size="small"
                        alt={item.node.images.edges[0].node.altText}
                      />  
                      return (
                        <ResourceItem
                          id={item.node.id}
                          media={media}
                          accessibilityLabel={`View details for ${title}`}  
                        >
                          <h3>
                            <TextStyle variation="strong">{title}</TextStyle>
                          </h3>
                          <p>${item.node.variants.edges[0].node.price}</p>
                        </ResourceItem>
                      );
                    }}
                  />  
                </Card.Section>
              )
            }) 
          }      
        </Card>
        <ProductDetails />
      </div>
    );
  }
}
export default ProductResults;
