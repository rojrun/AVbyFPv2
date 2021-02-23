import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productToDisplay: {},
      productKey: "",
      variants: [],
      images: [],
      price: ""
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.productToDisplay !== state.productToDisplay) {
      if (!props.productToDisplay.node.hasOnlyDefaultVariant) {
        const variants = props.productToDisplay.node.variants.edges.reduce((variants, current) => {
          return variants.concat([current.node.title])
        }, []);
        const images = props.productToDisplay.node.images.edges.filter((image) => {
          return image.node.altText === variants[0];
        });
        const price = props.productToDisplay.node.variants.edges[0].node.price;
        return {
          productToDisplay: props.productToDisplay,
          productKey: props.productKey,
          variants,
          images,
          price
        }    
      } else {  
        return {
          productToDisplay: props.productToDisplay,
          productKey: props.productKey,
          variants: null,
          images: props.productToDisplay.node.images.edges,
          price: props.productToDisplay.node.variants.edges[0].node.price
        }
      }  
    }
    return null;
  }

  handleVariantDetails = (variantTitle) => {
    const images = this.state.productToDisplay.node.images.edges.filter((image) => {
      return image.node.altText === variantTitle;
    });
    const variantElement = this.state.productToDisplay.node.variants.edges.filter((variant) => {
      return variant.node.title === variantTitle;
    });
    this.setState({
      images,
      price: variantElement[0].node.price
    });
  }

  render() {
    return (
      <Layout.Section primary>
        <Card title={this.state.productToDisplay.node.title} key={this.state.productKey}>
          <Card.Section title={
            <Stack distribution="center">
              <ButtonGroup segmented>
                {
                  this.state.variants === null 
                  ? <div style={{height: "4rem"}}></div>
                  : this.state.variants.map((variantTitle, index) => {
                    return (
                      <Button outline key={index} onClick={() => this.handleVariantDetails(variantTitle)}>{variantTitle}</Button> 
                    );
                  }) 
                }
              </ButtonGroup>
            </Stack>
          }>
            <Slideshow images={this.state.images}/>
          </Card.Section>
          <Card.Section title="Description">
            <div>
              {
                this.state.productToDisplay.node.descriptionHtml.indexOf('</') !== -1
                ? (
                  <div dangerouslySetInnerHTML={{__html: this.state.productToDisplay.node.descriptionHtml.replace(/(<? *script)/gi, 'illegalscript')}}>
                  </div>
                  )
                : this.state.productToDisplay.node.descriptionHtml  
              }
            </div>
          </Card.Section>
          <Card.Section>
            <Stack distribution="trailing">
              <ButtonGroup>
                <TextStyle variation="strong">${this.state.price}</TextStyle>
                <div style={{color: '#000000'}}>
                  <Button monochrome outline>
                    Add to Cart
                  </Button>
                </div>
              </ButtonGroup>
            </Stack>
          </Card.Section>
        </Card>       
      </Layout.Section>
    );   
  }
}
export default ProductDetails;
