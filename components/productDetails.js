import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle, Thumbnail} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productToDisplay: {},
      title: {},
      images: [],
      selectedVariant: {}
    }
    console.log("productToDisplay props: ", this.props.productToDisplay);
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.productToDisplay !== state.productToDisplay) {
  //     if (props.productToDisplay.node.hasOnlyDefaultVariant) {
  //       return {
  //         productToDisplay: props.productToDisplay,
  //         title: (
  //           <Stack>
  //             <ButtonGroup>
  //               <div style={{height: "4rem"}}></div>
  //             </ButtonGroup>
  //           </Stack>
  //         ),
  //         images: props.productToDisplay.node.images.edges
  //       }
  //     } else {
  //       return {
  //         productToDisplay: props.productToDisplay,
  //       }, () => {
  //         return {
  //           title: (
  //             <Stack>
  //               <ButtonGroup segmented>
  //                 {
  //                   state.productToDisplay.node.variants.edges.reduce((variants, current) => {
  //                     return variants.includes(current.node.title) ? variants : variants.concat([current.node.title]).sort() 
  //                   }, []).map((variantTitle, index) => {
  //                     return (
  //                       <Button outline key={index} onClick={() => this.handleVariantDetails(variantTitle)}>{variantTitle}</Button>
  //                     );
  //                   })
  //                 }
  //               </ButtonGroup>
  //             </Stack>   
  //           ),
  //           images: state.productToDisplay.node.variants.edges
  //         }
  //       }
  //     }
  //   }
  //   return null;
  // }

  // componentDidMount() {

  // }

  handleVariantDetails = (variantTitle) => {
    const lowerCaseTitle = variantTitle.charAt(0).toLowerCase() + variantTitle.slice(1);
    console.log("variant images: ", this.props.productToDisplay.node.images.edges);
    const images = this.props.productToDisplay.node.images.edges.filter((image) => {
      console.log("image: ", image.node.altText);
      console.log("variantTitle: ", lowerCaseTitle);
      return image.node.altText === lowerCaseTitle;
    });
    console.log("images: ", images);
    this.setState({images});
  }

  render() {
    console.log("states: ", this.state);
    return (
      <Layout.Section primary>
        <Card title={this.state.productToDisplay.node.title} key={this.props.productKey}>
          <Card.Section title={this.state.title}>
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
                <TextStyle variation="strong">${this.state.productToDisplay.node.variants.edges[0].node.price}</TextStyle>
                <div style={{color: '#000000'}}>
                  <Button monochrome outline>
                    Add to Cart
                  </Button>
                </div>
              </ButtonGroup>
            </Stack>
          </Card.Section>   
        </Card>


        {/*<Card title={this.props.productToDisplay.node.title} key={this.props.productKey}>
          {
            this.props.productToDisplay.node.hasOnlyDefaultVariant 
            ? <Card.Section title={
                <Stack>
                  <ButtonGroup>
                    <div style={{height: "4rem"}}></div>
                  </ButtonGroup>
                </Stack>
              }>
                <Slideshow images={this.props.productToDisplay.node.images} length={this.props.productToDisplay.node.images.edges.length}/>
              </Card.Section>
            : <Card.Section title={  
                <Stack>
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
                <Slideshow images={this.state.variantImages} length={this.state.variantImages.length}/>
              </Card.Section>  
          }
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
                <Slideshow images={this.props.productToDisplay.node.images}/>
              </Card.Section>
            : <Card.Section title={
                <Stack>
                  <ButtonGroup segmented>
                    {
                      this.props.productToDisplay.node.variants.edges.reduce((variants, current) => {
                        return variants.includes(current.node.title) ? variants : variants.concat([current.node.title]).sort() 
                      }, []).map((variantTitle, index) => {
                        return (
                          <Button outline key={index}>{variantTitle}</Button>
                        );
                      })
                    }
                  </ButtonGroup>
                </Stack>   
              }>
                <Slideshow images={this.props.productToDisplay.node.images}/>
              </Card.Section>  
          } 
          
          <Card.Section title="Description">
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
          </Card.Section>     
        </Card>  */}
        
      </Layout.Section>
    );
    
  }
}
export default ProductDetails;
