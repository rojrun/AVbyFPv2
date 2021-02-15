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
      let vendorObj = {};
      let productArray = [];
      // Searches for vendor to use as keys in productsList
      const vendorKeys = props.data.products.edges.reduce((allProducts, current) => {
        return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]).sort()
      }, []);
      
      // Makes products array from vendor keys
      vendorKeys.map((vendor) => {
        const products = props.data.products.edges.filter((product) => product.node.vendor === vendor)
          .sort((first, second) => {
            let a = first.node.title;
            let b = second.node.title;
            return a === b ? 0 : a > b ? 1 : -1;
        });
        console.log("vendor: ", vendor);
        
        
        // Checks if product array element has variants
        products.map((product) => {
          console.log("product: ", product);
         
          // Makes array of variant titles
          const productVariantTitles = product.node.variants.edges
            .filter(variant => variant.node.inventoryQuantity > 0)
            .reduce((productVariantTitles, currentProduct) => {
              return productVariantTitles.concat([currentProduct.node.title]).sort()
          }, []);
          
          if (product.node.hasOnlyDefaultVariant) {
            return productArray.push(product);   
          }
          
          // Get keys of product object
          // Loop through keys
          // if key is variants, change variants.node = newFilteredProductArray
          // Else reattach remaining keys to firstLayerObject
          // let firstLayerObject = {};
          Object.entries(product).forEach(([vendorObjKey, vendorObjIndex]) => {
            console.log("vendorObjKey: ", vendorObjKey);
            console.log("vendorObjIndex: ", vendorObjIndex);
            if (vendorObjKey !== "node") {
              console.log("vendorObjKey: ", vendorObjKey, " vendorObjIndex: ", vendorObjIndex);
              const test5 = vendorObj[vendorObjKey] = vendorObjIndex;
              console.log("test5: ", test5);
              return test5;
            }  
          
            
            Object.entries(vendorObjIndex).forEach(([secondLayerObjKey, secondLayerObjIndex]) => {
              console.log("secondLayerObjKey: ", secondLayerObjKey, " secondLayerObjIndex: ", secondLayerObjIndex);
              if (secondLayerObjKey !== "variants") {
                // console.log("secondLayerObj: ", firstLayerObjectIndex[secondLayerObjKey] = secondLayerObjIndex);
                // return firstLayerObjectIndex[secondLayerObjKey] = secondLayerObjIndex;
                console.log("secondLayerObjIndex: ", secondLayerObjIndex);
                // return secondLayerObjIndex;
                const test1 = vendorObj[secondLayerObjKey] = secondLayerObjIndex;
                console.log("test1: ", test1);
                return test1;
              }  
              // Makes new array by removing product variantElement with no
              const newFilteredProductArray = secondLayerObjIndex.edges.filter((variantElement) => {
                const variantTitle = variantElement.node.title;
                return productVariantTitles.includes(variantTitle);
              });
              console.log("newFilteredProductArray: ", newFilteredProductArray);
              console.log("vendorObj: ", vendorObj);
              console.log('secondLayerObjKey: ', secondLayerObjKey);
              const test2 = vendorObj[secondLayerObjKey] = newFilteredProductArray;
              console.log("test2: ", test2);
              return test2;
            });    
          });     
          console.log("vendorObj: ", vendorObj);
          const test3 = Object.assign(productsList, vendorObj);
          console.log("test3: ", test3);
          return test3;
        });
        console.log("productArray: ", productArray);
        vendorObj[vendor] = productArray;
        const test4 = Object.assign(productsList, vendorObj);
        console.log("test4: ", test4);
        return test4;
      });
      return {
        productsList
      };   
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount(), productsList state: ", this.state.productsList);
  }

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
