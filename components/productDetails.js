import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle, Thumbnail} from '@shopify/polaris';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productToDisplay: {}
    }
    console.log("productDetails props: ", this.props.productToDisplay);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("props: ", props.productToDisplay);
  //   console.log("state: ", state.productToDisplay);
  //   if (props.productToDisplay !== state.productToDisplay) {
  //     console.log("if statement true");
  //     return {
  //       productToDisplay: props.productToDisplay
  //     };
  //   }
  //   console.log("if statement false");
  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("nextProps: ", nextProps);
  //   console.log("nextState: ", nextState);
  //   if (nextProps.productToDisplay !== nextState.productToDisplay) {
  //     console.log("shouldComponentUpdate true");
  //     return true;
  //   } else {
  //     console.log("shouldComponentUpdate false");
  //     return false;
  //   }
  // }

  componentDidMount() {
    this.setState({productToDisplay: this.props.productToDisplay},
      () => {console.log("productToDisplay state: ", this.state.productToDisplay)});
  }

  render() {
    console.log("productToDisplay props: ", this.props.productToDisplay);
    // return (
    //   <h1>hi world</h1>
    // );

    return (
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
