import React from 'react';
import {Card, Layout, Link} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from 'next/dist/next-server/server/api-utils';
import {Context} from '@shopify/app-bridge-react';

// Child component for index.js. Display menu links in home page.
class ProductTypeCategories extends React.Component {
  constructor(props) {
    super(props);
    console.log("ProductTypeCategories props: ", this.props);
  }

  render() {  
    return (
      <Layout.section>
        <Card>
          <Link>
            {this.props.productType}
          </Link>
        </Card>
      </Layout.section>
    );
    // return (
    //   <Layout.Section>
    //     <Card sectioned>
    //       <Link
    //         onClick={() => {
    //           console.log("link clicked!");
    //           store.remove('productType');
    //           store.set('productType', this.props.productType);
    //           // this.props.handleRedirect();
    //         }}
    //       >
    //         {`${(this.props.productType +'s').toUpperCase()}`}  
    //       </Link>
    //     </Card>
    //   </Layout.Section>
    // );
  }
}
export default ProductTypeCategories;
