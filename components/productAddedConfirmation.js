import React from 'react';
import {DisplayText, Modal, Stack, TextContainer} from '@shopify/polaris';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import '../scss/_productAddedConfirmation.module.scss';

class ProductAddedConfirmation extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      app: {}
    }
  }

  componentDidMount() {
    this.setState({app: this.context});
  }

  handleRedirectToCart = () => {
    const redirect = Redirect.create(this.state.app);
    redirect.dispatch(
      Redirect.Action.APP,
      '/cart'
    );  
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
          onAction: this.handleRedirectToCart
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
export default ProductAddedConfirmation;
