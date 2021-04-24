import React from 'react';
import {Button, Card, Form, FormLayout, Layout, Select, TextField} from '@shopify/polaris';

class CustomerInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      company: "",
      shippingAdd1: "",
      shippingAdd2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
      nameOnCard: "",
      cardNumber: "",
      mmYY: "",
      securityCode: ""
    }
  }

  handleSubmit = (event) => {
    console.log("handleSubmit", event);
  }

  handleChange = (name, event) => {
    console.log("event: ", event);
    this.setState({
      [name]: event
    });
  }

  render() {
    console.log("state: ", this.state);
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
        <Form name="customerCheckoutInfo" method="post" onSubmit={this.handleSubmit} autoComplete={true} preventDefault={true}>
          <Card title="Shipping Information">
            <Card.Section>
              <FormLayout>
                <FormLayout.Group>
                  <TextField label="First name" name="firstName" type="text"  value={this.state.firstName} onChange={event => this.handleChange('firstName', event)}/>
                  <TextField label="Last name" name="lastName" type="text"  value={this.state.lastName} onChange={event => this.handleChange('lastName', event)}/>
                </FormLayout.Group>
                <TextField label="Company (optional)" name="company" type="text" value={this.state.company} onChange={event => this.handleChange('company', event)}/>
                <TextField label="Shipping Address line 1" name="shippingAdd1" type="text" error="Shipping Address is required" value={this.state.shippingAdd1} onChange={event => this.handleChange('shippingAdd1', event)}/>
                <TextField label="Shipping Address line 2" name="shippingAdd2" type="text" value={this.state.shippingAdd2} onChange={event => this.handleChange('shippingAdd2', event)}/>
                <FormLayout.Group>
                  <TextField label="City" name="city" type="text" error="City is required" value={this.state.city} onChange={event => this.handleChange('city', event)}/>
                  <Select label="State" name="state" type="text" options={stateOptions} value={this.state.state} onChange={event => this.handleChange('state', event)}/>
                  <TextField label="Zip code" name="zipCode" type="text" error="Zip code is required" value={this.state.zipCode} onChange={event => this.handleChange('zipCode', event)}/>
                </FormLayout.Group>
                <FormLayout.Group>
                  <TextField label="Phone number" name="phoneNumber" type="tel" error="Phone number is required" value={this.state.phoneNumber} onChange={event => this.handleChange('phoneNumber', event)}/>
                  <TextField label="Email" name="email" type="email" error="Email is required" value={this.state.email} onChange={event => this.handleChange('email', event)}/>
                </FormLayout.Group>
              </FormLayout>  
            </Card.Section>
          </Card>
          <Card title="Billing Information">
            <Card.Section>
              <FormLayout>
                <FormLayout.Group> 
                  <TextField label="Name on card" name="nameOnCard" type="text" value={this.state.nameOnCard} onChange={event => this.handleChange('nameOnCard', event)}/>
                  <TextField label="Card number" name="cardNumber" type="text" error="Card number is required" value={this.state.cardNumber} onChange={event => this.handleChange('cardNumber', event)}/>
                </FormLayout.Group>
                <FormLayout.Group>
                  <TextField label="MM/YY" name="mmYY" type="text" error="MM/YY is required" value={this.state.mmYY} onChange={event => this.handleChange('mmYY', event)}/>
                  <TextField label="Security code" name="securityCode" type="text" error="Security code is required" value={this.state.securityCode} onChange={event => this.handleChange('securityCode', event)}/>
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
export default CustomerInfoForm;
