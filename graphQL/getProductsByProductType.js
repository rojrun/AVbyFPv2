import gql from 'graphql-tag';

// This variable is imported to each top-level tier in each page component
const GET_PRODUCTS_BY_PRODUCT_TYPE = gql`
query getProductType($product_type: String!) {
  products(first: 20, query: $product_type) {
    edges {
      node {
        id
        title
        hasOnlyDefaultVariant
        descriptionHtml
        images(first: 25) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        tags
        totalInventory
        vendor
        variants(first: 5) {
          edges {
            node {
              image {
                id
              }
              price
              id   
              title
              inventoryQuantity
            }
          }
        }
      }
    }
  }
}
`;
export default GET_PRODUCTS_BY_PRODUCT_TYPE;
