import React from 'react';
import {Card, Layout, Link} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';

// Child component for index.js. Display menu links in home page.
class ProductTypeCategories extends React.Component {
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

  redirectToProducts = () => {
    store.remove('productType');
    store.set('productType', this.props.productType);
    const redirect = Redirect.create(this.state.app);
    redirect.dispatch(
      Redirect.Action.APP,
      '/products',
    );   
  };

  capitalizeFirstLetter = (str) => {
    str += 's';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() { 
    return (
        <Layout.Section>
          <Card sectioned>
            <Link onClick={() => {this.redirectToProducts()}}>
              {this.capitalizeFirstLetter(this.props.productType)}  
            </Link>
          </Card>
        </Layout.Section>
      );
    }
}
export default ProductTypeCategories;
