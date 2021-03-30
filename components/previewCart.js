import React from 'react';
import {Button, DisplayText, Heading, Modal, Stack, TextContainer, TextStyle} from '@shopify/polaris';
import '../scss/_previewCart.module.scss';

class PreviewCart extends React.Component {
  constructor(props) {
    super(props);
    
    console.log("props: ", this.props);
  }

  handleCheckout = () => {
    console.log("checkout clicked");
  }

  render() {
    return (
      <Modal
        activator={this.props.activator}
        open={this.props.open}
        onClose={this.props.onClose}
        large={true}
        role="dialog"
        limitHeight={true}
        title="Added to your cart"
        primaryAction={{
          content: "View cart & checkout",
          onAction: this.handleCheckout
        }}
      >
        <Modal.Section>
          <Stack alignment="center" distribution="leading" vertical={false} wrap={true}>
            <Stack.Item>
              <img src={this.props.image} style={{width:"100%"}}/>
            </Stack.Item>
            <Stack.Item>
              <TextContainer>
                <DisplayText size="small">Quantity 1</DisplayText>
                <DisplayText size="medium" element="h2">{this.props.product.node.title}</DisplayText>
                <DisplayText size="small">{this.props.variant}</DisplayText>
                <DisplayText size="small">${this.props.product.node.variants.edges[0].node.price}</DisplayText>
              </TextContainer>
            </Stack.Item>
          </Stack>
        </Modal.Section>
      </Modal>  
    );
  }
}
export default PreviewCart;
