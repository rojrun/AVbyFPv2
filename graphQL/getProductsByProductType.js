import gql from 'graphql-tag';

// This variable is imported to each top-level tier in each page component

const GET_PRODUCTS_BY_PRODUCT_TYPE = gql`
  query getProductType($product_type: String ) {
    products(first: 10, query: $product_type) {
      edges {
        node {
          id
          title
          handle
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          productType
          totalInventory
          vendor
          variants(first: 2) {
            edges {
              node {
                price
                id
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_PRODUCTS_BY_PRODUCT_TYPE;