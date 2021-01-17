import React from 'react';
import {Card} from '@shopify/polaris';

// Child component from Project Page. Displays product information when product is clicked from ProductResults.js
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("productDetails props: ", this.props);
    return (
      <Card title="Product Details">
        <Card.Section>

        </Card.Section>
      </Card>
    );
  }
}
export default ProductDetails;
