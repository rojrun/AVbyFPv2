import React from 'react';
import {Card, ResourceList, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page, ResourceItem} from '@shopify/polaris';
import ProductDetails from '../components/productDetails.js';

// Child component from Project Page. Dynamically categorizes products into groups by vendor.
class ProductResults extends React.Component {
  constructor(props) {
    super(props);
  }

  handleProductDetails = (product) => {
    console.log("clicked", product);
  }

  render() {
    return (
      <div>
        <Layout>
          <Layout.Section secondary>
            <Card title={`Results | Showing ${this.props.filteredProductResults.length} products`}>
              {
                Object.entries(this.props.sortedProductsObj).map(([key, values]) => {
                  return (           
                    <Card.Section title={key} key={key}>
                      <ResourceList
                        resourceName={{singular: 'product', plural: 'products'}}
                        items={values}
                        renderItem={(value) => {
                          const {title, variants} = value.node;
                          const media = <Thumbnail
                            source={value.node.images.edges[0].node.originalSrc}
                            size="small"
                            alt={value.node.images.edges[0].node.altText}
                          />  
                          return (
                            <ResourceItem
                              id={value.node.id}
                              key={value.node.id}
                              media={media}
                              accessibilityLabel={`View details for ${title}`}  
                              onClick={() => this.handleProductDetails(value)}
                            >
                              <TextStyle variation="strong">{title}</TextStyle>
                              <p>${value.node.variants.edges[0].node.price}</p>
                            </ResourceItem>
                          );
                        }}
                      />  
                    </Card.Section>
                  )
                })
              }      
            </Card>
          </Layout.Section>
          <ProductDetails product={this.props.sortedProductsObj[Object.keys(this.props.sortedProductsObj)[0]][0]} />
        </Layout>
      </div>
    );
  }
}
export default ProductResults;
