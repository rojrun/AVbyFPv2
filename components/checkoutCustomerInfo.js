import React from 'react';
import {Button, Card, DisplayText, Form, FormLayout, Layout, Select, TextField} from '@shopify/polaris';

class CheckoutCustomerInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {

  }

  render() {
    const stateOptions = [
      {label: '', value: ''},
      {label: 'Alabama', value: 'AL'},
      {label: 'Alaska', value: 'AK'},
      {label: 'American Samoa', value: 'AS'},
      {label: 'Arizona', value: 'AZ'},
      {label: 'Arkansas', value: 'AR'},
      {label: 'California', value: 'CA'},
      {label: 'Colorado', value: 'CO'},
      {label: 'Connecticut', value: 'CT'},
      {label: 'Delaware', value: 'DE'},
      {label: 'District Of Columbia', value: 'DC'},
      {label: 'Federated States of Micronesia', value: 'FM'},
      {label: 'Florida', value: 'FL'},
      {label: 'Georgia', value: 'GA'},
      {label: 'Guam', value: 'GU'},
      {label: 'Hawaii', value: 'HI'},
      {label: 'Idaho', value: 'ID'},
      {label: 'Illinois', value: 'IL'},
      {label: 'Indiana', value: 'IN'},
      {label: 'Iowa', value: 'IA'},
      {label: 'Kansas', value: 'KS'},
      {label: 'Kentucky', value: 'KY'},
      {label: 'Louisiana', value: 'LA'},
      {label: 'Maine', value: 'ME'},
      {label: 'Marshall Islands', value: 'MH'},
      {label: 'Maryland', value: 'MD'},
      {label: 'Massachusetts', value: 'MA'},
      {label: 'Michigan', value: 'MI'},
      {label: 'Minnesota', value: 'MN'},
      {label: 'Mississippi', value: 'MS'},
      {label: 'Missouri', value: 'MO'},
      {label: 'Montana', value: 'MT'},
      {label: 'Nebraska', value: 'NE'},
      {label: 'Nevada', value: 'NV'},
      {label: 'New Hampshire', value: 'NH'},
      {label: 'New Jersey', value: 'NJ'},
      {label: 'New Mexico', value: 'NM'},
      {label: 'New York', value: 'NY'},
      {label: 'North Carolina', value: 'NC'},
      {label: 'North Dakota', value: 'ND'},
      {label: 'Northern Mariana Islands', value: 'MP'},
      {label: 'Ohio', value: 'OH'},
      {label: 'Oklahoma', value: 'OK'},
      {label: 'Oregon', value: 'OR'},
      {label: 'Palau', value: 'PW'},
      {label: 'Pennsylvania', value: 'PA'},
      {label: 'Puerto Rico', value: 'PR'},
      {label: 'Rhode Island', value: 'RI'},
      {label: 'South Carolina', value: 'SC'},
      {label: 'South Dakota', value: 'SD'},
      {label: 'Tennessee', value: 'TN'},
      {label: 'Texas', value: 'TX'},
      {label: 'Utah', value: 'UT'},
      {label: 'Vermont', value: 'VT'},
      {label: 'Virginia', value: 'VA'},
      {label: 'Virgin Islands', value: 'VI'},
      {label: 'Washington', value: 'WA'},
      {label: 'West Virginia', value: 'WV'},
      {label: 'Wisconsin', value: 'WI'},
      {label: 'Wyoming', value: 'WY'}
    ];
    return (
      <Layout.Section primary>
        <Form onSubmit={this.handleSubmit} preventDefault={true}>
          <Card title="Shipping Information">
            <Card.Section>
              <FormLayout>
                <FormLayout.Group>
                  <TextField label="First name" error="First name is required"/>
                  <TextField label="Last name" error="Last name is required"/>
                </FormLayout.Group>
                <TextField label="Company (optional)"/>
                <TextField label="Shipping Address line 1" error="Shipping Address is required"/>
                <TextField label="Shipping Address line 2"/>
                <FormLayout.Group>
                  <TextField label="City" error="City is required"/>
                  <Select
                    label="State"
                    options={stateOptions}
                  />
                  <TextField label="Zip code" error="Zip code is required"/>
                </FormLayout.Group>
                <FormLayout.Group>
                  <TextField label="Phone number" error="Phone number is required"/>
                  <TextField label="Email" error="Email is required"/>
                </FormLayout.Group>
              </FormLayout>  
            </Card.Section>
          </Card>
          <Card title="Billing Information">
            <Card.Section>
              <FormLayout>
                <FormLayout.Group>
                  <TextField label="Card number" error="Card number is required"/>
                  <TextField label="MM/YY" error="MM/YY is required"/>
                  <TextField label="Security code" error="Security code is required"/>
                </FormLayout.Group>
              </FormLayout>
              <br/>
              <Button submit fullWidth>Place your order</Button>
            </Card.Section>
          </Card>
        </Form>
      </Layout.Section>
    );
  }
}
export default CheckoutCustomerInfo;