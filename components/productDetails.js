import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle, Thumbnail} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variantToDisplay: {}
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

  // componentDidMount() {
  //   this.setState({productToDisplay: this.props.productToDisplay},
  //     () => {console.log("productToDisplay state: ", this.state.productToDisplay)});
  // }

  render() {
    console.log("productToDisplay props: ", this.props.productToDisplay);
    return (
      <Layout.Section primary>
        <Card title={this.props.productToDisplay.node.title}>
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
          
          {/* <Card.Section title="Description">
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
          </Card.Section>     */}
        </Card>
      </Layout.Section>
    );
    
  }
}

// const ProductDetails = (props) => {
//   console.log("productToDisplay props: ", props.productToDisplay);
//   return (
//     <Layout.Section primary>
//       <Card title={props.productToDisplay.node.title}>
//         {
//           props.productToDisplay.node.hasOnlyDefaultVariant
//           ? <Card.Section>
//               <Slideshow images={props.productToDisplay.node.images}/>
//             </Card.Section>
//           : <Card.Section title={
//               <Stack>
//                 <ButtonGroup segmented>
//                   {
//                     props.productToDisplay.node.variants.edges.reduce((variants, current) => {
//                       return variants.includes(current.node.title) ? variants : variants.concat([current.node.title]).sort() 
//                     }, []).map((variantTitle, index) => {
//                       return (
//                         <Button outline key={index}>{variantTitle}</Button>
//                       );
//                     })
//                   }
//                 </ButtonGroup>
//               </Stack>   
//             }>
//               <Slideshow images={props.productToDisplay.node.images}/>
//             </Card.Section>  
//         }
        
//         {/* <Card.Section title="Description">
//           <div>
//             {
//               props.productToDisplay.node.descriptionHtml.indexOf('</') !== -1
//               ? (
//                 <div dangerouslySetInnerHTML={{__html: props.productToDisplay.node.descriptionHtml.replace(/(<? *script)/gi, 'illegalscript')}}>
//                 </div>
//                 )
//               : props.productToDisplay.node.descriptionHtml  
//             }
//           </div>
//         </Card.Section>
//         <Card.Section>
//           <Stack distribution="trailing">
//             <ButtonGroup>
//               <TextStyle variation="strong">${props.productToDisplay.node.variants.edges[0].node.price}</TextStyle>
//               <div style={{color: '#000000'}}>
//                 <Button monochrome outline>
//                   Add to Cart
//                 </Button>
//               </div>
//             </ButtonGroup>
//           </Stack>
//         </Card.Section>     */}
//       </Card>
//     </Layout.Section>
//   );
// }
export default ProductDetails;
