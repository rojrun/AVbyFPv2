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
    console.log("props: ", this.props.data.products.edges);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.productsList) {
      const productsList = {};
      const nodeObj = {};
      const variantsObj = {};
      const edgesObj = {};
     
      const products = props.data.products.edges.map((product) => {
        console.log("product: ", product);
        if (product.node.hasOnlyDefaultVariant) {
          return product;
        }
        console.log("product with variants: ", product);
        // Restructure product to nodeObj
        Object.entries(product).map(([firstLayerKey, firstLayerValue]) => {
          console.log("firstLayerKey: ", firstLayerKey, " | firstLayerValue: ", firstLayerValue);
          if (firstLayerKey !== "node") {
            nodeObj[firstLayerKey] = firstLayerValue;
            return nodeObj;
          }  
        
          Object.entries(firstLayerValue).map(([secondLayerKey, secondLayerValue]) => {
            if (secondLayerKey !== "variants") {
              nodeObj[secondLayerKey] = secondLayerValue;
              variantsObj[firstLayerKey] = nodeObj;
              return variantsObj;
            }  
          
            Object.entries(secondLayerValue).map(([thirdLayerKey, thirdLayerValue]) => {
              if (thirdLayerKey !== "edges") {
                edgesObj[thirdLayerKey] = thirdLayerValue;
                nodeObj[secondLayerKey] = edgesObj;
                return nodeObj;
              }
              
              // Filters variants with inventoryQuantity > 0
              const productVariantsArray = thirdLayerValue.filter((variant) => {
                return variant.node.inventoryQuantity > 0;
              });
              variantsObj[thirdLayerKey] = productVariantsArray;
              nodeObj[secondLayerKey] = variantsObj;
              productWithVariants[firstLayerKey] = nodeObj;
              return productWithVariants;  
            });          
          });     
        });
        product = productWithVariants;
        return product;
      });
     
      // Searches for vendor to use as keys in productsList
      const vendorKeys = products.reduce((allProducts, current) => {
        return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]).sort()
      }, []);
    
      // Makes products array from vendor keys
      vendorKeys.map((vendor) => {
        const filteredArray = products.filter((product) => product.node.vendor === vendor)
          .sort((first, second) => {
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
          <Card title={`Results | Showing ${this.props.data.products.edges.length} products`}>
            {
              Object.entries(this.state.productsList).map(([key, values]) => {
                console.log("key: ", key);
                console.log("values: ", values);
                return (           
                  <Card.Section title={key} key={key}>
                    <ResourceList
                      resourceName={{singular: 'product', plural: 'products'}}
                      items={values}
                      totalItemsCount={values.length}
                      renderItem={(value) => {
                        console.log("value: ", value);
                        const {id, title} = value.node;
                        console.log("id: ", id);
                        console.log("title: ", title);
                        const media = <Thumbnail
                          source={value.node.images.edges[0].node.originalSrc}
                          size="small"
                          alt={value.node.images.edges[0].node.altText}  
                        />  
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
