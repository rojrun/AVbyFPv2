import React from 'react';
import {Card, Layout, ResourceItem, ResourceList, TextStyle, Thumbnail} from '@shopify/polaris';
import ProductDetails from '../components/productDetails.js';

// Child component from Project Page. Restructures raw data & dynamically categorizes products into groups by vendor.
class ProductResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: {}
    }
    console.log("data props: ", this.props.data.products.edges);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.productsList) {
      const productsList = {};
      const vendorObj = {};
      const vendorProductArray = [];
      const productNode = {};
      const productNodeWithVariants = {};
      
      // Loop through products
      // Loop through first set of keys,
      // if key = node, loop through node
      // filter variant with inventoryQuantity > 0
      

      const products = props.data.products.edges.map((product) => {
        console.log("product: ", product);
        if (product.node.hasOnlyDefaultVariant) {
          return product;
        }
        console.log("product: ", product);


        Object.entries(product).map(([key, index]) => {
          console.log("key: ", key, " | index: ", index);
          const productVariants = product.node.variants.edges.filter((variant) => {
            return variant.node.inventoryQuantity > 0
          });
          console.log("productVariants: ", productVariants);
        });

      });
      console.log("products: ", products);




      // Searches for vendor to use as keys in productsList
      const vendorKeys = props.data.products.edges.reduce((allProducts, current) => {
        return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]).sort()
      }, []);
      
      // Makes products array from vendor keys
      // vendorKeys.map((vendor) => {
      //   console.log("vendor key: ", vendor);
      //   const products = props.data.products.edges.filter((product) => product.node.vendor === vendor)
      //     .sort((first, second) => {
      //       let a = first.node.title;
      //       let b = second.node.title;
      //       return a === b ? 0 : a > b ? 1 : -1;
      //   });
      //   console.log("products sorted by vendor in array: ", products);
        
      //   // Checks if product array element has variants
      //   products.map((product) => {
      //     console.log("product: ", product);
      //     if (product.node.hasOnlyDefaultVariant) {
      //       productArray.push(product);  
      //       console.log("productArray: ", productArray); 
      //       return productArray;
      //     }
          
      //     // Makes array of variant titles
      //     const productVariantTitles = product.node.variants.edges
      //       .filter(variant => variant.node.inventoryQuantity > 0)
      //       .reduce((productVariantTitles, currentProduct) => {
      //         return productVariantTitles.concat([currentProduct.node.title]).sort()
      //     }, []);
      //     console.log("productVariantTitles: ", productVariantTitles);
          
      //     // Loops through node key to secondLayerObjKey, to find variants key
      //     Object.entries(product).forEach(([vendorObjKey, vendorObjIndex]) => {
      //       if (vendorObjKey !== "node") {
      //         productNode[vendorObjKey] = vendorObjIndex;
      //         return productNode;
      //       }  
            
      //       Object.entries(vendorObjIndex).forEach(([secondLayerObjKey, secondLayerObjIndex]) => {
      //         if (secondLayerObjKey !== "variants") {
      //           productWithVariants[secondLayerObjKey] = secondLayerObjIndex;
      //           productNode[vendorObjKey] = productWithVariants;
      //           return productNode;
      //         }  
      //         // Makes new array by removing product variantElement that doesn't match with productVariantTitles
      //         const newFilteredVariantsArray = secondLayerObjIndex.edges.filter((variantElement) => {
      //           const variantTitle = variantElement.node.title;
      //           return productVariantTitles.includes(variantTitle);
      //         });
      //         productWithVariants[secondLayerObjKey] = newFilteredVariantsArray;
      //         productNode[vendorObjKey] = productWithVariants;
      //         return productNode;
      //       });
      //       return productArray;
      //     });     
      //     productArray.push(productNode); 
      //     return productArray;
      //   });
        
      //   vendorObj[vendor] = productArray;
      //   console.log("vendorObj: ", vendorObj);
      //   Object.assign(productsList, vendorObj);
      //   console.log("productsList: ", productsList);
      //   return productsList;
      // });
      return {
        productsList: productsList
      };   
    }
    return null;
  }

  handleProductDetails = (key, product) => {
    this.setState({
      productToDisplay: product,
      productKey: key
    });
  }

  render() {
    console.log("state.productsList: ", this.state.productsList);
    return ( 
      <Layout>
        <Layout.Section secondary>
          <Card title={`Results | Showing ${this.props.originalDataListCount} products`}>
            {/* {
              Object.entries(this.state.productsList).map(([key, values]) => {
                console.log("key: ", key);
                console.log("values: ", values);
                return (           
                  <Card.Section title={key} key={key}>
                    <ResourceList
                      resourceName={{singular: 'product', plural: 'products'}}
                      items={this.state.productToDisplay}
                      totalItemsCount={this.props.originalDataListCount}
                      renderItem={(value) => {
                        const {id, title} = value.node;
                        const media = <Thumbnail
                          source={value.node.images.edges[0].node.originalSrc}
                          size="small"
                          alt={value.node.images.edges[0].node.altText}
                        />  
                        return (
                          <ResourceItem
                            id={id}
                            key={id}
                            media={media}
                            accessibilityLabel={`View details for ${title}`}
                            onClick={() => this.handleProductDetails(id, value)}
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
            }  */}
            {/* {
              Object.entries(this.state.productsList).map(([key, values]) => {
                // console.log("key: ", key);
                // console.log("values: ", values);
                return (           
                  <Card.Section title={key} key={key}>
                    <ResourceList
                      resourceName={{singular: 'product', plural: 'products'}}
                      items={values}
                      totalItemsCount={this.props.originalDataListCount}
                      renderItem={(value) => {
                        const {id, title} = value.node;
                        const media = <Thumbnail
                          source={value.node.images.edges[0].node.originalSrc}
                          size="small"
                          alt={value.node.images.edges[0].node.altText}
                        />  
                        return (
                          <ResourceItem
                            id={id}
                            key={id}
                            media={media}
                            accessibilityLabel={`View details for ${title}`}
                            onClick={() => this.handleProductDetails(id, value)}
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
            }       */}
          </Card>
        </Layout.Section>
        {/* {
          this.state.productToDisplay && this.state.productKey
          ? <ProductDetails productToDisplay={this.state.productToDisplay} productKey={this.state.productKey}/>
          : <Card title="Loading..."></Card>
        } */}
      </Layout>   
    );
  }
}
export default ProductResults;
