import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack} from '@shopify/polaris';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
   
    // console.log("object props: ", (Object.keys(this.props.productsList)[0]).values(this.props.productsList)[0]);
  }

  render() {
    // console.log("productsList: ", this.props.productsList);
    // console.log("key: ", Object.keys(this.props.productsList)[0]);
    // console.log("value: ", (this.props.productsList[Object.keys(this.props.productsList)[0]])[0]);

  //   console.log("productToDisplay props: ", this.props.productToDisplay);
    
    return (
      <h1>hi</h1>
  //     <Layout.Section primary>
  //       <Card title={this.props.product.node.title}>
  //         <Card.Section title="Images">
  //           {this.props.product.node.hasOnlyDefaultVariant
  //             ? <div></div>
  //             : this.props.product.node.variants.edges.map((variant) => {
                
  //               return (
  //                 <div>{variant.node.title}</div>
  //               )
  //             })
  //           }
  //         </Card.Section>
  //         <Card.Section title="Description">
  //           <div>
  //             {this.props.product.node.descriptionHtml.indexOf('</') !== -1
  //               ? (
  //                 <div dangerouslySetInnerHTML={{__html: this.props.product.node.descriptionHtml.replace(/(<? *script)/gi, 'illegalscript')}}>
  //                 </div>
  //                 )
  //               : this.props.product.node.descriptionHtml  
  //             }
  //           </div>
  //         </Card.Section>
  //         <Card.Section>
  //           <Stack distribution="trailing">
  //             <ButtonGroup>
  //               <p>${this.props.product.node.variants.edges[0].node.price}</p>
  //               <div style={{color: '#000000'}}>
  //                 <Button monochrome outline>
  //                   Add to Cart
  //                 </Button>
  //               </div>
  //             </ButtonGroup>
  //           </Stack>
  //         </Card.Section>   
  //       </Card>
  //     </Layout.Section>
    );
  }
}
export default ProductDetails;
