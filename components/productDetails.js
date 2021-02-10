import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variantButtons: [],
      variantImages: []
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   // if (props.productToDisplay !== state.productToDisplay) {
  //     if (!props.productToDisplay.node.hasOnlyDefaultVariant) {
  //       const variantButtons = props.productToDisplay.node.variants.edges.reduce((variants, current) => {
  //         return variants.includes(current.node.title) ? variants : variants.concat([current.node.title]).sort() 
  //       }, []);
  //       const lowerCaseFirstVariant = variantButtons[0].charAt(0).toLowerCase() + variantButtons[0].slice(1);
  //       const variantImages = props.productToDisplay.node.images.edges.filter((image) => {
  //         return image.node.altText === lowerCaseFirstVariant;
  //       });
  //       return {
  //         variantButtons,
  //         variantImages
  //       }    
  //     } else {  
  //       return {
  //         variantButtons: null,
  //         variantImages: props.productToDisplay.node.images.edges
  //       }
  //     }  
  //   // }
  //   // return null;
  // }

  componentDidMount() {
    const variantButtons = this.props.productToDisplay.node.variants.edges.reduce((variants, current) => {
      return variants.includes(current.node.title) ? variants : variants.concat([current.node.title]).sort() 
    }, []);
    const lowerCaseFirstVariant = variantButtons[0].charAt(0).toLowerCase() + variantButtons[0].slice(1);
    const variantImages = this.props.productToDisplay.node.images.edges.filter((image) => {
      return image.node.altText === lowerCaseFirstVariant;
    });
    this.setState({variantImages});
  }

  handleVariantDetails = (variantTitle) => {
    const lowerCaseTitle = variantTitle.charAt(0).toLowerCase() + variantTitle.slice(1);
    const variantImages = this.props.productToDisplay.node.images.edges.filter((image) => {
      return image.node.altText === lowerCaseTitle;
    });
    this.setState({variantImages});
  }

  render() {
    console.log("variantImages state: ", this.state.variantImages);
    return (
      <Layout.Section primary>
        {/* <Card title={this.props.productToDisplay.node.title}> */}
          {/* <Card.Section title={
            <Stack distribution="center">
              <ButtonGroup segmented>
                {
                  this.state.variantButtons === null 
                  ? <div style={{height: "4rem"}}></div>
                  : this.state.variantButtons.map((variantTitle, index) => {
                    return (
                      <Button outline key={index} onClick={() => this.handleVariantDetails(variantTitle)}>{variantTitle}</Button> 
                    );
                  }) 
                }
              </ButtonGroup>
            </Stack>
          }>
            <Slideshow images={this.state.variantImages}/>
          </Card.Section> */}

          
          {/* {
            this.props.productToDisplay.node.hasOnlyDefaultVariant 
            ? <Card.Section title={
                <Stack>
                  <ButtonGroup>
                    <div style={{height: "4rem"}}></div>
                  </ButtonGroup>
                </Stack>
              }>
                <Slideshow images={this.props.productToDisplay.node.images.edges}/>
              </Card.Section>
            : <Card.Section title={  
                <Stack distribution="center">
                  <ButtonGroup segmented>
                    {
                      this.state.variantButtons.map((variantTitle, index) => {
                        return (
                          <Button outline key={index} onClick={() => this.handleVariantDetails(variantTitle)}>{variantTitle}</Button>
                        );
                      })
                    }
                  </ButtonGroup>
                </Stack>   
              }>
                <Slideshow images={this.state.variantImages}/>
              </Card.Section>  
          } */}

         <Card title={this.props.productToDisplay.node.title} key={this.props.productKey}>
          {
            this.props.productToDisplay.node.hasOnlyDefaultVariant 
            ? <Card.Section title={
                <Stack>
                  <ButtonGroup>
                    <div style={{height: "4rem"}}></div>
                  </ButtonGroup>
                </Stack>
              }>
                <Slideshow images={this.props.productToDisplay.node.images.edges}/>
              </Card.Section>
            : <Card.Section title={
                <Stack distribution="center">
                  <ButtonGroup segmented>
                    {
                      this.props.productToDisplay.node.variants.edges.reduce((variants, current) => {
                        return variants.includes(current.node.title) ? variants : variants.concat([current.node.title]).sort() 
                      }, []).map((variantTitle, index) => {
                        return (
                          <Button outline key={index} onClick={() => this.handleVariantDetails(variantTitle)}>{variantTitle}</Button>
                        );
                      })
                    }
                  </ButtonGroup>
                </Stack>   
              }>
                <Slideshow images={this.state.variantImages}/>
              </Card.Section>  
          } 
          
          {/*<Card.Section title="Description">
            <div>
              {
                props.productToDisplay.node.descriptionHtml.indexOf('</') !== -1
                ? (
                  <div dangerouslySetInnerHTML={{__html: props.productToDisplay.node.descriptionHtml.replace(/(<? *script)/gi, 'illegalscript')}}>
                  </div>
                  )
                : props.productToDisplay.node.descriptionHtml  
              }
            </div>
          </Card.Section>
          <Card.Section>
            <Stack distribution="trailing">
              <ButtonGroup>
                <TextStyle variation="strong">${props.productToDisplay.node.variants.edges[0].node.price}</TextStyle>
                <div style={{color: '#000000'}}>
                  <Button monochrome outline>
                    Add to Cart
                  </Button>
                </div>
              </ButtonGroup>
            </Stack>
          </Card.Section>    */} 
        </Card>       
      </Layout.Section>
    );   
  }
}
export default ProductDetails;
