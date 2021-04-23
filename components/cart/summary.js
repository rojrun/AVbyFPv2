import React from 'react';
import {Button, Card, DisplayText, Layout, Stack} from '@shopify/polaris';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import '../../scss/cart/_summary.module.scss';

class Summary extends React.Component {
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

  handleRedirectToCheckout = () => {
    const redirect = Redirect.create(this.state.app);
    redirect.dispatch(
      Redirect.Action.APP,
      '/checkout'
    );
  }

  render() {
    let estimatedTotal = 0;
    this.props.cart.map((lineItem) => {
      const {quantity, product} = lineItem;
      estimatedTotal += (quantity * product.node.variants.edges[0].node.price);
    });
    return (
      <Layout.Section secondary>
        <Card title="Order Summary">
          <Card.Section>
            <Stack>
              <Stack.Item fill>
                <DisplayText size="small">Estimated Total</DisplayText>
              </Stack.Item>
              <Stack.Item>
                <DisplayText size="small">${estimatedTotal.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2})}</DisplayText>
              </Stack.Item> 
            </Stack>
            <DisplayText size="small">(before tax/shipping)</DisplayText>
            <br/>
            <Button fullWidth onClick={() => {this.handleRedirectToCheckout()}}>Checkout now</Button>
          </Card.Section>
        </Card>
      </Layout.Section>
    );
  }
}
export default Summary;
