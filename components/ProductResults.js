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
      // Searches for vendor to use as keys in productsList
      const vendorKeys = props.data.products.edges.reduce((allProducts, current) => {
        return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]).sort()
      }, []);
      
      // Makes products array from vendor keys
      const productsList = {};
      vendorKeys.map((vendor) => {
        const products = props.data.products.edges.filter((product) => product.node.vendor === vendor)
          .sort((first, second) => {
            let a = first.node.title;
            let b = second.node.title;
            return a === b ? 0 : a > b ? 1 : -1;
          });
        productsList[vendor] = products;
      });
      return {
        productsList
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("productsList: ", this.state.productsList);
    Object.entries(this.state.productsList).map(([key, value]) => {
      console.log("key: ", key);
      console.log("value: ", value);
      value.map((item) => {
        console.log({item});
        if (item.node.hasOnlyDefaultVariant) {
          console.log("doesn't have variant: ", item);
          console.log("productKey: ", (item[Object.keys(item)[0]]));
          this.setState({
            // productToDisplay: (this.state.productsList[Object.keys(this.state.productsList)[0]])[0],
            // productKey: (this.state.productsList[Object.keys(this.state.productsList)[0]])[0].node.id,
            productToDisplay: item.node,
            // productKey: (item[Object.keys(item)[0]])[0].node.id,
            productPrice: item.node.variants.edges[0].node.price,
            productImages: item.node.images.edges
          });
        } else {
          const productVariants = item.node.variants.edges
            .filter(variant => variant.node.inventoryQuantity > 0)
            .reduce((productVariants, current) => {
              return productVariants.concat([current.node.title]).sort()
          }, []);
          console.log("productVariants: ", productVariants);
          const lowerCaseFirstVariant = productVariants[0].charAt(0).toLowerCase() + productVariants[0].slice(1);
          console.log('lowerCaseFirstVariant: ', lowerCaseFirstVariant);
          const images = item.node.images.edges.filter((image) => {
            return image.node.altText === lowerCaseFirstVariant;
          });
          console.log("images: ", images);
          const price = item.node.variants.edges.filter((variant) => {
            return variant.node.title === productVariants[0];
          })[0].node.price;
          console.log("price: ", price);

        }
      });
    });
  
      
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
            {
              Object.entries(this.state.productsList).map(([key, values]) => {
                console.log("key: ", key);
                console.log("values: ", values);
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
            }      
          </Card>
        </Layout.Section>
        {
          this.state.productToDisplay && this.state.productKey
          ? <ProductDetails productToDisplay={this.state.productToDisplay} productKey={this.state.productKey}/> 
          : <Card title="Loading..."></Card>
        }
      </Layout>   
    );
  }
}
export default ProductResults;
