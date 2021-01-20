import React from 'react';
import {MediaCard, Layout} from '@shopify/polaris';

// Child component from Project Page. Displays product information when product is clicked from ProductResults.js
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("productDetails props: ", this.props.product);
    return (
      <Layout.Section primary>
        <MediaCard title={this.props.product.node.title}>
          
        </MediaCard>
      </Layout.Section>
    );
  }
}
export default ProductDetails;
