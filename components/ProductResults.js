import React from 'react';
import {Card, DisplayText, Layout, ResourceItem, ResourceList, Thumbnail} from '@shopify/polaris';
import ProductDetails from '../components/productDetails.js';

// Child component from Project Page. Restructures raw data & dynamically categorizes products into groups by vendor.
class ProductResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: {},
      productToDisplay: {},
      productId: "",
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.productsList) {
      const productsList = {};
      const products = props.data.products.edges.map((product) => {
        const productWithVariants = {};
        if (product.node.hasOnlyDefaultVariant) {
          return product;
        }
        
        // Restructure product to productWithVariants
        Object.entries(product).map(([firstLayerKey, firstLayerValue]) => {
          if (firstLayerKey !== "node") {
            productWithVariants[firstLayerKey] = firstLayerValue;
            return productWithVariants;
          }
        
          const nodeObj = {};
          Object.entries(firstLayerValue).map(([secondLayerKey, secondLayerValue]) => {
            if (secondLayerKey !== "variants") {
              nodeObj[secondLayerKey] = secondLayerValue;
              productWithVariants[firstLayerKey] = nodeObj;
              return productWithVariants;
            }  
            
            const variantsObj = {};
            Object.entries(secondLayerValue).map(([thirdLayerKey, thirdLayerValue]) => {
              if (thirdLayerKey !== "edges") {
                variantsObj[thirdLayerKey] = thirdLayerValue;
                nodeObj[secondLayerKey] = variantsObj;
                productWithVariants[firstLayerKey] = nodeObj;
                return productWithVariants;
              }
              
              // Filters variants with inventoryQuantity > 0
              const edgesArray = thirdLayerValue.filter((variant) => {
                return variant.node.inventoryQuantity > 0;
              });
              variantsObj[thirdLayerKey] = edgesArray;
              nodeObj[secondLayerKey] = variantsObj;
              productWithVariants[firstLayerKey] = nodeObj;
              return productWithVariants;  
            });          
          });     
        });
        product = productWithVariants;
        return product;
      });

      const allVendors = [
        "akg", "audio-technica", "chauvet", "electro-voice", "furman", "hosa", "k&m", "neumann", "neutrik", "presonus", "pioneer", "radial", "sennheiser", "shure", "zoom"
      ];
      
      // Searches for common tags between current.node.tags and allVendors arrays
      // Sorts product into each vendor category
      products.reduce((newVendorArray, current) => {
        const similarTag = current.node.tags.filter((tag) => {
          return allVendors.includes(tag);
        }).toString();
        return newVendorArray.includes(similarTag) ? newVendorArray : newVendorArray.concat([similarTag]).sort()
      }, []).map((vendor) => {
        const filteredArray = products.filter((product) => {
          return product.node.tags.includes(vendor);  
        }).sort((first, second) => {
            let a = first.node.title;
            let b = second.node.title;
            return a === b ? 0 : a > b ? 1 : -1;
        });
        productsList[vendor] = filteredArray;    
        return productsList;
      }); 
      return {
        productsList
      };   
    }
    return null;
  }

  componentDidMount() {
    const firstProduct = (Object.values(this.state.productsList)[0])[0];
    this.setState({
      productToDisplay: firstProduct,
      productId: firstProduct.node.id
    });
  }

  handleProductDetails = (id, product) => {
    this.setState({
      productToDisplay: product,
      productId: id
    });
  }

  render() {
    return ( 
      <Layout>
        <Layout.Section secondary>
          <Card title={`Results | Showing ${this.props.data.products.edges.length} products`}>
            {
              Object.entries(this.state.productsList).map(([key, values]) => {
                return (           
                  <Card.Section title={key} key={key}>
                    <ResourceList
                      resourceName={{singular: 'product', plural: 'products'}}
                      items={values}
                      totalItemsCount={values.length}
                      renderItem={(value) => {
                        const {id, title} = value.node;
                        const source = value.node.images.edges.filter((image) => {
                          return image.node.altText === value.node.variants.edges[0].node.title;
                        });
                        const media = <Thumbnail
                          source={
                            !value.node.hasOnlyDefaultVariant
                            ? !source.length
                              ? value.node.images.edges[0].node.originalSrc
                              : source[0].node.originalSrc  
                            : value.node.images.edges[0].node.originalSrc  
                          }
                          size="large"
                          alt={value.node.images.edges[0].node.altText}  
                        />;  
                        const price = value.node.variants.edges[0].node.price;
                        return (
                          <ResourceItem
                            id={id}
                            key={id}
                            media={media}
                            accessibilityLabel={`View details for ${title}`}
                            onClick={() => this.handleProductDetails(id, value)}
                          >
                            <DisplayText size="medium" element="h3">{title}</DisplayText>
                            <DisplayText size="small">${price}</DisplayText>
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
        {
          this.state.productToDisplay && this.state.productId
          ? <ProductDetails productToDisplay={this.state.productToDisplay} productKey={this.state.productId}/>
          : <Layout.Section>
              <Card title="Loading..."></Card>
            </Layout.Section>
        }
      </Layout>   
    );
  }
}
export default ProductResults;
