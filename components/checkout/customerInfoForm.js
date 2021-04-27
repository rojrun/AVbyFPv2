import React from 'react';
import {Button, Card, Form, FormLayout, InlineError, Layout, Select, TextField} from '@shopify/polaris';

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
      securityCode: "",
      errors: []
    }
  }

  handleChange = (value, id) => {
    this.setState({
      [id]: value
    });
  }

  isInvalid = (event) => {
    console.log("event: ", event.current.value);
    if (!event.current.value) {
      return true;
    }
    return false;
  }

  errorMessage = (isInvalid) => {
    console.log('isInvalid: ', isInvalid);
    const error = isInvalid 
      ? 'First name is required'
      : '';
    return error;  
  }

  handleSubmit = (event) => {
    console.log("handleSubmit", event);
    // this.isInvalid(event);
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
        <Form name="customerInfoForm" method="post" onSubmit={this.handleSubmit} autoComplete={true} preventDefault={true}>
          <Card title="Shipping Information">
            <Card.Section>
              <FormLayout>
                <FormLayout.Group>
                  <TextField label="First name" name="firstName" id="firstName" type="text" error={this.isInvalid} value={this.state.firstName} onChange={value => this.handleChange(value, 'firstName')}/>
                  <InlineError message={this.errorMessage(this.isInvalid)} fieldID="firstName"/>
                  <TextField label="Last name" name="lastName" id="lastName" type="text" error={this.isInvalid} value={this.state.lastName} onChange={value => this.handleChange(value, 'lastName')}/>
                </FormLayout.Group>
                <TextField label="Company (optional)" name="company" id="company" type="text" value={this.state.company} onChange={value => this.handleChange(value, 'company')}/>
                <TextField label="Shipping Address line 1" name="shippingAdd1" id="shippingAdd1" type="text" error={this.isInvalid} value={this.state.shippingAdd1} onChange={value => this.handleChange(value, 'shippingAdd1')}/>
                <TextField label="Shipping Address line 2" name="shippingAdd2" id="shippingAdd2" type="text" value={this.state.shippingAdd2} onChange={value => this.handleChange(value, 'shippingAdd2')}/>
                <FormLayout.Group>
                  <TextField label="City" name="city" id="city" type="text" error={this.isInvalid} value={this.state.city} onChange={value => this.handleChange(value, 'city')}/>
                  <Select label="State" name="state" id="state" type="text" options={stateOptions} error={this.isInvalid} value={this.state.state} onChange={value => this.handleChange(value, 'state')}/>
                  <TextField label="Zip code" name="zipCode" id="zipCode" type="text" error={this.isInvalid} value={this.state.zipCode} onChange={value => this.handleChange(value, 'zipCode')}/>
                </FormLayout.Group>
                <FormLayout.Group>
                  <TextField label="Phone number" name="phoneNumber" id="phoneNumber" type="tel" error={this.isInvalid} value={this.state.phoneNumber} onChange={value => this.handleChange(value, 'phoneNumber')}/>
                  <TextField label="Email" name="email" id="email" type="email" error={this.isInvalid} value={this.state.email} onChange={value => this.handleChange(value, 'email')}/>
                </FormLayout.Group>
              </FormLayout>  
            </Card.Section>
          </Card>
          <Card title="Billing Information">
            <Card.Section>
              <FormLayout>
                <FormLayout.Group> 
                  <TextField label="Name on card" name="nameOnCard" id="nameOnCard" type="text" error={this.isInvalid} value={this.state.nameOnCard} onChange={value => this.handleChange(value, 'nameOnCard')}/>
                  <TextField label="Card number" name="cardNumber" id="cardNumber" type="text" error={this.isInvalid} value={this.state.cardNumber} onChange={value => this.handleChange(value, 'cardNumber')}/>
                </FormLayout.Group>
                <FormLayout.Group>
                  <TextField label="MM/YY" name="mmYY" id="mmYY" type="text" error={this.isInvalid} value={this.state.mmYY} onChange={value => this.handleChange(value, 'mmYY')}/>
                  <TextField label="Security code" name="securityCode" id="securityCode" type="text" error={this.isInvalid} value={this.state.securityCode} onChange={value => this.handleChange(value, 'securityCode')}/>
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
