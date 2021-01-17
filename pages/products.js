import React from 'react';
import {Query} from 'react-apollo';
import {Card, ResourceList, ResourceItem, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page, Avatar} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';
import GET_PRODUCTS_BY_PRODUCT_TYPE from '../graphQL/getProductsByProductType.js';
import ProductResults from '../components/productResults.js';
import ProductDetails from '../components/productDetails.js';

class Products extends React.Component {
  // static contextType = Context;
  
  render() {
    const productTypeVar = store.get('productType');
    const productTypeObj = {};
    productTypeObj.product_type = productTypeVar;
    
    return (
      <Page title={`${(productTypeVar + 's').toUpperCase()}`} fullWidth>
        <Query query={GET_PRODUCTS_BY_PRODUCT_TYPE} variables={productTypeObj}>
            {({data, loading, error}) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>{error.message}</div>;
              const filteredProductResults = (data.products.edges).filter((product) => product.node.totalInventory > 0);
              console.log("filteredProductResults: ", filteredProductResults);            
              const vendors = filteredProductResults.reduce((allProducts, current) => {
                return allProducts.includes(current.node.vendor) ? allProducts : allProducts.concat([current.node.vendor]);
              }, []);

              return (
                <Layout>
                  <Layout.Section primary>
                    <ProductResults filteredProductResults={filteredProductResults} vendors={vendors} />
                  </Layout.Section>
                  {/* <Layout.Section secondary>
                    <Card title="Filters">
                      <Card.Section>
                        <p>filter</p>
                      </Card.Section>
                    </Card>
                  </Layout.Section> */}
                  {/* <Layout.Section fullWidth>
                    <ProductDetails filteredProductResults={filteredProductResults}/>
                  </Layout.Section> */}
                </Layout>  
              );            
            }}
        </Query>
      </Page>    
    );  
  }
}    
export default Products;
