import React from 'react';
import {Card, EmptyState, Layout, Page, Button, ButtonGroup, DisplayText, Link} from '@shopify/polaris';
import {Query} from 'react-apollo';
import {ResourcePicker, TitleBar} from '@shopify/app-bridge-react';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import Products from './products.js';


// const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
const img = '../images/AVbyFPLogo_Horizontal_360x.png';

class Index extends React.Component {
  static contextType = Context;
 
  render() {
    const app = this.context;
    
    const redirectToProducts = () => {
      const redirect = Redirect.create(app);
      redirect.dispatch(
        Redirect.Action.APP,
        '/products',
      );   
    };
  
    return (
      <Page fullWidth title="Product Search">
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Link 
                onClick={() => {
                  store.set('product_type', {product_type: 'headphone'});
                  redirectToProducts();
                }}
              >
                Headphones
              </Link>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card sectioned>
            <Link 
                onClick={() => {
                  store.set('product_type', {product_type: 'microphone'});
                  redirectToProducts();
                }}
              >
                Microphones
              </Link>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }  
}
export default Index;

// class Index extends React.Component {
//   state = {open: false};

//   render() {
//     const emptyState = !store.get('ids');
//     return (
//       <Page>
//         <TitleBar
//           title="AVbyFP"
//           primaryAction={{
//             content: 'Select products',
//             onAction: () => this.setState({open: true}),
//           }}
//         />
//         <ResourcePicker
//           resourceType="Product"
//           showVariants={false}
//           open={this.state.open}
//           onSelection={(resources) => this.handleSelection(resources)}
//           onCancel={() => this.setState({open: false})}  
//         />
//         {emptyState ? (
//         <Layout>
//           <EmptyState
//             heading="Discount your products temporarily"
//             action={{
//               content: 'Select products',
//               onAction: () => this.setState({open: true}),
//             }}
//             image={img}
//           >
//             <p>Select products to change their price temporarily.</p>
//           </EmptyState>  
//         </Layout>
//         ) : (
//             <ResourceListWithProducts/>
//         )}    
//       </Page>
//     );
//   }
  
//   handleSelection = (resources) => {
//     const idsFromResources = resources.selection.map((product) => product.id);
//     this.setState({open: false});
//     store.set('ids', idsFromResources);
//   };
