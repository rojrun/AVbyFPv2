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
      productId: ""
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
      console.log("products after removing variant: ", products);
      const allVendors = [
        "akg", "audio-technica", "chauvet", "electro-voice", "furman", "hosa", "k&m", "neumann", "neutrik", "presonus", "pioneer", "radial", "sennheiser", "shure", "zoom"
      ];
      // loop through products, to product.node.tags
      // check if each element is equal to product.node.tags ["audio-technica", "headphones", "deals"]
      // output vendorKeys = ["audio-technica"]
     
      // const vendorKeys = products.map((product) => {
      //   return product.node.tags.filter((tag) => {
      //     console.log("allVendors.indexOf(tag) !== -1: ", allVendors.indexOf(tag) !== -1);
      //     return allVendors.indexOf(tag) !== -1;
      //   })
        
      // });
      const vendorKeys = products.map((product) => {
        const filterA = product.node.tags.filter((tag) => {
          return allVendors.includes(tag);
        });
        console.log("filterA: ", filterA);
        return vendorKeys.includes(filterA) ? vendorKeys : vendorKeys.concat([filterA]).sort();
      });
      
        // const found = product.node.tags.some(el => allVendors.includes(el));
        // console.log("found: ", found);
     

      // const vendorKeys = products.reduce((newVendorArray, current) => {
      //   let tag = allVendors.filter((el) => {
      //     return current.node.tags.includes(el))
      //   });
      //   console.log("tag: ", tag);
      //   return newVendorArray.includes(tag) ? newVendorArray : newVendorArray.concat([tag]).sort()
      // }, []);
      console.log("vendorKeys: ", vendorKeys);
      

      // Searches for vendor to use as keys in productsList
      // const vendorKeys = products.reduce((allProducts, current) => {
      //   return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]).sort()
      // }, []);
    
      // Makes products array from vendor keys
      // vendorKeys.map((vendor) => {
      //   console.log("vendor: ", vendor);
      //   const filteredArray = products.filter((product) => {
      //     console.log("product: ", product);

      //     return product.node.tags.filter((tag) => {
      //       console.log("tag: ", tag);
      //       return tag === vendor;
      //     })
      //   })
      //     // .sort((first, second) => {
      //     //   let a = first.node.title;
      //     //   let b = second.node.title;
      //     //   return a === b ? 0 : a > b ? 1 : -1;
      //     // }
      //   // );
      //   console.log("filteredArray: ", filteredArray);
      //   productsList[vendor] = filteredArray;    
      //   console.log("productsList: ", productsList);  
      //   return productsList;
      // });  

      
      return {
        productsList
      };   
    }
    return null;
  }

  // componentDidMount() {
  //   const firstProduct = (Object.values(this.state.productsList)[0])[0];
  //   this.setState({
  //     productToDisplay: firstProduct,
  //     productId: firstProduct.node.id
  //   })
  // }

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
                        const media = <Thumbnail
                          source={value.node.images.edges[0].node.originalSrc}
                          size="small"
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
                            <TextStyle variation="strong">{title}</TextStyle>
                            <p>${price}</p>
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
