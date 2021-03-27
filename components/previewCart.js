import React from 'react';
import {Modal, Stack, TextContainer} from '@shopify/polaris';

class PreviewCart extends React.Component {
  constructor(props) {
    super(props);
    
    console.log("props: ", this.props);
  }

  render() {
    return (
      <Modal
        activator={this.props.activator}
        open={this.props.open}
        onClose={this.props.onClose}
        large
        title="Added to your cart"
      >
        <Modal.Section>
          <Stack>
            <TextContainer>
              <p>Hi World</p>
            </TextContainer>
          </Stack>
        </Modal.Section>
      </Modal>  
    );
  }
}
export default PreviewCart;
