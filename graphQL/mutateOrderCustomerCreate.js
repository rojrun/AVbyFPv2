import gql from 'graphql-tag';

const MUTATE_ORDER_CUSTOMER_CREATE = gql`
  mutation customerAndOrder($order_input: DraftOrderInput!, $customer_input: CustomerInput!) {
    draftOrderCreate(input: $order_input) {
      draftOrder {
        id
        createdAt
        status
        lineItems(first: 10) {
          edges {
            node {
              id
              title
              quantity
              originalUnitPrice
              originalTotal
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
    customerCreate(input: $customer_input) {
      customer {
        email
        firstName
        id
        lastName
        phone
        addresses(first: 1) {
          id
          address1
          address2
          city
          company
          country
          province
          zip
        }
      }
      userErrors {
        field
        message
      }
    }
  }  
`;
export default MUTATE_ORDER_CUSTOMER_CREATE;
