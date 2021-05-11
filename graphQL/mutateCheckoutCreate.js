import gql from 'graphql-tag';

const MUTATE_CHECKOUT_CREATE = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {

      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;
export default MUTATE_CHECKOUT_CREATE;
