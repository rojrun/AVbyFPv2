import gql from 'graphql-tag';

// This variable is imported to each top-level tier in each page component
const GET_PRODUCTS_BY_PRODUCT_TYPE = gql`
  query getProductType($product_type: String!) {
    products(first: 20, query: $product_type) {
      edges {
        node {
          id
          title
          descriptionHtml
          featuredImage {
            id
          }
          hasOnlyDefaultVariant
          images(first: 10) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          mediaCount
          productType
          status
          tags
          totalInventory
          totalVariants
          vendor
          variants(first: 5) {
            edges {
              node {
                displayName
                image {
                  id
                }
                price
                id   
                title
              }
            }
          }
        }
      }
    }
  }
`;
export default GET_PRODUCTS_BY_PRODUCT_TYPE;
