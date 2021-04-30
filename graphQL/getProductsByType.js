import gql from 'graphql-tag';

// This variable is imported to each top-level tier in each page component
const GET_PRODUCTS_BY_TYPE = gql`
  query getProductsByType($tag: String!) {
    products(first: 20, sortKey: TITLE, query: $tag) {
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
          variants(first: 5, sortKey: TITLE) {
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
export default GET_PRODUCTS_BY_TYPE;
