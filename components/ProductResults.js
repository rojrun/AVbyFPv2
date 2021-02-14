import React from 'react';
import {Card, Layout, ResourceItem, ResourceList, TextStyle, Thumbnail} from '@shopify/polaris';
import ProductDetails from '../components/productDetails.js';

// Child component from Project Page. Restructures raw data & dynamically categorizes products into groups by vendor.
class ProductResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: {},
      productToDisplay: {},
      productKey: "",
      productPrice: "",
      productImages: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.productsList) {
      let productsList = {};
      // Searches for vendor to use as keys in productsList
      const vendorKeys = props.data.products.edges.reduce((allProducts, current) => {
        return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]).sort()
      }, []);
      
      // Makes products array from vendor keys
      vendorKeys.map((vendor) => {
        console.log("vendor: ", vendor);
        const products = props.data.products.edges.filter((product) => product.node.vendor === vendor)
          .sort((first, second) => {
            let a = first.node.title;
            let b = second.node.title;
            return a === b ? 0 : a > b ? 1 : -1;
          });
        console.log("products array: ", products);  
        // Checks if product array element has variants
        products.map((product) => {
          console.log("product: ", product);
          if (!product.node.hasOnlyDefaultVariant) {
            let newProductObject = {};
            // Get keys of product
            // Loop through keys
            // if key is variants, change variants.node = newFilteredProductArray
            // Else reattach remain keys to newProductObject
            const firstKeyLayer = Object.keys(product);
            console.log('firstKeyLayer: ', firstKeyLayer);
            
            const secondKeyLayer = Object.keys(product[firstKeyLayer]);
            console.log("secondKeyLayer: ", secondKeyLayer);
            


            // Makes array of variant titles
            const productVariantTitles = product.node.variants.edges
              .filter(variant => variant.node.inventoryQuantity > 0)
              .reduce((productVariantTitles, currentProduct) => {
                return productVariantTitles.concat([currentProduct.node.title]).sort()
              }, []);

            // Removing variant array with title not matching productVariantTitles
            const newFilteredProductArray = product.node.variants.edges.filter((variantElement) => {
              const variantTitle = variantElement.node.title;
              return productVariantTitles.includes(variantTitle);
            });

            console.log("newFilteredProductArray: ", newFilteredProductArray);
            return newFilteredProductArray;
          }
          console.log("product else: ", productsList[vendor] = product);
          return productsList[vendor] = product;
        });     
      });
      return {
        productsList
      };   
    }
    return null;
  }

  componentDidMount() {
    console.log("productsList state: ", this.state.productsList);
  }

  // componentDidMount() {
  //   // console.log("productsList: ", this.state.productsList);
  //   Object.entries(this.state.productsList).map(([key, value]) => {
  //     console.log("key: ", key);
  //     console.log("value: ", value);
  //     value.map((item) => {
  //       if (item.node.hasOnlyDefaultVariant) {
  //         this.setState({
  //           productToDisplay: item.node,
  //           productKey: (item[Object.keys(item)[0]]).id,
  //           productPrice: item.node.variants.edges[0].node.price,
  //           productImages: item.node.images.edges
  //         }, () => console.log("item with no variants: ", this.state));
  //       } else {
  //         console.log("item: ", item);
  //         const productVariantTitles = item.node.variants.edges
  //           .filter(variant => variant.node.inventoryQuantity > 0)
  //           .reduce((productVariantTitles, current) => {
  //             return productVariantTitles.concat([current.node.title]).sort()
  //         }, []);
  //         const lowerCaseFirstVariant = productVariantTitles[0].charAt(0).toLowerCase() + productVariantTitles[0].slice(1);
  //         const images = item.node.images.edges.filter((image) => {
  //           return image.node.altText === lowerCaseFirstVariant;
  //         });
  //         const price = item.node.variants.edges.filter((variant) => {
  //           return variant.node.title === productVariantTitles[0];
  //         })[0].node.price;
  //         const id = item.node.id;
  //         console.log("id: ", id);
  //         const filteredVariantArray = item.node.variants.edges.filter((variant) => {
  //           const title = variant.node.title;
  //           return productVariantTitles.includes(title);
  //         });
  //         console.log("filteredVariantArray: ", filteredVariantArray)
  //         this.setState({
  //           productToDisplay: filteredVariantArray,
  //           productKey: id,
  //           productPrice: price,
  //           productImages: images 
  //         }, () => console.log("item with variants: ", this.state));
  //       }
  //     });
  //   });  
  // }

  handleProductDetails = (key, product) => {
    this.setState({
      productToDisplay: product,
      productKey: key
    });
  }

  render() {
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
