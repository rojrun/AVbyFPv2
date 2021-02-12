import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productToDisplay: {},
      variants: [],
      images: [],
      price: ""
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.productToDisplay !== state.productToDisplay) {
      if (!props.productToDisplay.node.hasOnlyDefaultVariant) {
        const variants = props.productToDisplay.node.variants.edges.filter(variant => variant.node.inventoryQuantity > 0).reduce((variants, current) => {
          return variants.concat([current.node.title]).sort()
        }, []);
        const lowerCaseFirstVariant = variants[0].charAt(0).toLowerCase() + variants[0].slice(1);
        const images = props.productToDisplay.node.images.edges.filter((image) => {
          return image.node.altText === lowerCaseFirstVariant;
        });
        const price = null;
        return {
          productToDisplay: props.productToDisplay,
          variants,
          images,
          price
        }    
      } else {  
        return {
          productToDisplay: props.productToDisplay,
          variants: null,
          images: props.productToDisplay.node.images.edges,
          price: props.productToDisplay.node.variants.edges[0].node.price
        }
      }  
    }
    return null;
  }

  handleVariantDetails = (variantTitle) => {
    const lowerCaseTitle = variantTitle.charAt(0).toLowerCase() + variantTitle.slice(1);
    const images = this.props.productToDisplay.node.images.edges.filter((image) => {
      return image.node.altText === lowerCaseTitle;
    });
    this.setState({images});
  }

  render() {
    return (
      <Layout.Section primary>
        <Card title={this.props.productToDisplay.node.title} key={this.props.productKey}>
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
