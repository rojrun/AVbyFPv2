import gql from 'graphql-tag';

const MUTATE_CUSTOMER_CREATE = gql`
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer {
        addresses
        email
        firstName
        id
        lastName
        phone   
      }
      userErrors {
        field
        message
      }
    }
  }
`;
export default MUTATE_CUSTOMER_CREATE;
