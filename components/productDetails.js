import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle, Thumbnail} from '@shopify/polaris';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("productToDisplay prop: ",this.props.productToDisplay);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("nextProps: ", nextProps.productToDisplay);
  //   console.log("prevState: ", prevState.productToDisplay);
  //   if (nextProps.productToDisplay !== prevState.productToDisplay) {
  //     return {
  //       productToDisplay: nextProps.productToDisplay,
  //     };
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.productToDisplay !== prevProps.productToDisplay) {
  //     console.log("display item state has changed");
  //   }
  // }

  render() {
    console.log("productToDisplay prop: ", this.props.productToDisplay);
    return this.props.productToDisplay && (
      <Layout.Section primary>
        <Card title={this.props.productToDisplay.node.title}>
          <Card.Section title="Images">
            {
              this.props.productToDisplay.node.hasOnlyDefaultVariant
              ? this.props.productToDisplay.node.images.edges.map((image, key) => {
                  return (
                    <Thumbnail
                      source={image.node.originalSrc}
                      size="large"
                      alt={image.node.altText}
                      key={key}
                    />
                  )
                })
              : this.props.productToDisplay.node.variants.edges.map((variant) => {
                return (
                  <div>{variant.node.title}</div>
                )
              })
            }
          </Card.Section>
          <Card.Section title="Description">
            <div>
              {this.props.productToDisplay.node.descriptionHtml.indexOf('</') !== -1
                ? (
                  <div dangerouslySetInnerHTML={{__html: this.props.productToDisplay.node.descriptionHtml.replace(/(<? *script)/gi, 'illegalscript')}}>
                  </div>
                  )
                : this.props.productToDisplay.node.descriptionHtml  
              }
            </div>
          </Card.Section>
          <Card.Section>
            <Stack distribution="trailing">
              <ButtonGroup>
                <TextStyle variation="strong">${this.props.productToDisplay.node.variants.edges[0].node.price}</TextStyle>
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
