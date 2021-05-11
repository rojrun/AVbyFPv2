import gql from 'graphql-tag';

const MUTATE_CUSTOMER_CREATE = gql`
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
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
export default MUTATE_CUSTOMER_CREATE;
