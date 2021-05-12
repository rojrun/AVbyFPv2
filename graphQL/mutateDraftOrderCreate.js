import gql from 'graphql-tag';

const MUTATE_DRAFT_ORDER_CREATE = gql`
  mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
        billingAddress {
          id
        }
        completedAt
        createdAt
        customer {
          id
        }
        email
        lineItems(first: 10) {
          edges {
            node {
              id
            }
          }
        }
        name
        order {
          id
        }
        shippingAddress {
          id
        }
        shippingLine {
          id
        }
        status
        subtotalPrice
        totalPrice
        totalTax
      }
      userErrors {
        field
        message
      }
    }
  }
`;
export default MUTATE_DRAFT_ORDER_CREATE;


// {
//   "input": {
//     "customerId": "gid://shopify/Customer/5253253890215",
//     "billingAddress": {
//       "address1": "123 walker st",
//       "city": "La Palma",
//       "phone": "+12135557777",
//       "province": "California",
//       "zip": "90630"
//     },
//     "email": "flywheel@gm.com",
//     "lineItems": [
//       {
//         "title": "shoe",
//         "quantity": 1,
//         "originalUnitPrice": 10
//       },
//       {
//         "title": "socks",
//         "quantity": 3,
//         "originalUnitPrice": 2
//       }
//     ]
//   }
// }