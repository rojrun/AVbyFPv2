import React from 'react';
import {Button, Card, Form, FormLayout, Layout, Select, TextField} from '@shopify/polaris';
import {Mutation} from 'react-apollo';
import MUTATE_CUSTOMER_CREATE from '../graphQL/mutateCustomerCreate.js';

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
      error: {}
    }
  }

  handleChange = (value, id) => {
    if (!value) {
      this.setState({
        [id]: value
      });
    } else {
      this.setState(state => {
        delete state.error[id];
        return {
          error: state.error,
          [id]: value
        };
      });
    }
  }

  // use try/catch when sending data
  handleSubmit = (event) => {
    Array.from(event.target.elements).map(element => {
      if (element.nodeName !== "BUTTON") {
        if (!element.value) {
          this.setState(state => {
            state.error[element.id] = element.labels[0].textContent + " is required";
            return {error: state.error};
          });
        } else {
          this.setState(state => {
            delete state.error[element.id];
            return {error: state.error};
          });
        }
      }
    }); 
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
        <Mutation mutation={MUTATE_CUSTOMER_CREATE}>
          {(customerCreate, {loading, error}) => (
            <Form name="customerInfoForm" method="post" onSubmit={this.handleSubmit} autoComplete={true} preventDefault={true}>
              <Card title="Customer Information">
                <Card.Section>
                  <FormLayout>
                    <FormLayout.Group>
                      <TextField label="First name" name="firstName" id="firstName" type="text" pattern="^[a-zA-Z\-]+$" error={this.state.error.firstName} value={this.state.firstName} onChange={value => this.handleChange(value, 'firstName')}/>
                      <TextField label="Last name" name="lastName" id="lastName" type="text" pattern="^[a-zA-Z\-]+$" error={this.state.error.lastName} value={this.state.lastName} onChange={value => this.handleChange(value, 'lastName')}/>
                    </FormLayout.Group>
                    <TextField label="Company (optional)" name="company" id="company" type="text" pattern="^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$" value={this.state.company} onChange={value => this.handleChange(value, 'company')}/>
                    <TextField label="Shipping Address line 1" name="shippingAdd1" id="shippingAdd1" type="text" pattern="^[a-zA-Z0-9\s,.'-()]{3,}$" error={this.state.error.shippingAdd1} value={this.state.shippingAdd1} onChange={value => this.handleChange(value, 'shippingAdd1')}/>
                    <TextField label="Shipping Address line 2" name="shippingAdd2" id="shippingAdd2" type="text" pattern="^[a-zA-Z0-9\s,.'-()]{3,}$" value={this.state.shippingAdd2} onChange={value => this.handleChange(value, 'shippingAdd2')}/>
                    <FormLayout.Group condensed>
                      <TextField label="City" name="city" id="city" type="text" pattern="^[a-zA-Z\- ]+$" error={this.state.error.city} value={this.state.city} onChange={value => this.handleChange(value, 'city')}/>
                      <Select label="State" name="state" id="state" type="text" options={stateOptions} error={this.state.error.state} value={this.state.state} onChange={value => this.handleChange(value, 'state')}/>
                      <TextField label="Zip code" name="zipCode" id="zipCode" type="text" pattern="^\d{5}([ \-]\d{4})?$" error={this.state.error.zipCode} value={this.state.zipCode} onChange={value => this.handleChange(value, 'zipCode')}/>
                    </FormLayout.Group>
                    <FormLayout.Group>
                      <TextField label="Phone number" name="phoneNumber" id="phoneNumber" type="tel" pattern="^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$" placeholder="(555)555-5555" error={this.state.error.phoneNumber} value={this.state.phoneNumber} onChange={value => this.handleChange(value, 'phoneNumber')}/>
                      <TextField label="Email" name="email" id="email" type="email" pattern="^[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$" error={this.state.error.email} value={this.state.email} onChange={value => this.handleChange(value, 'email')}/>
                    </FormLayout.Group>
                  </FormLayout>  
                </Card.Section>
              </Card>
              <Card title="Billing Information">
                <Card.Section>
                  <FormLayout>
                    <FormLayout.Group> 
                      <TextField label="Name on card" name="nameOnCard" id="nameOnCard" type="text" pattern="^[a-zA-Z\- ]+$" error={this.state.error.nameOnCard} value={this.state.nameOnCard} onChange={value => this.handleChange(value, 'nameOnCard')}/>
                      <TextField label="Card number" name="cardNumber" id="cardNumber" type="text" pattern="^\d{16}$" error={this.state.error.cardNumber} value={this.state.cardNumber} onChange={value => this.handleChange(value, 'cardNumber')}/>
                    </FormLayout.Group>
                    <FormLayout.Group>
                      <TextField label="MM/YY" name="mmYY" id="mmYY" type="text" pattern="^\d{4}$" error={this.state.error.mmYY} value={this.state.mmYY} onChange={value => this.handleChange(value, 'mmYY')}/>
                      <TextField label="Security code" name="securityCode" id="securityCode" type="text" pattern="^\d{3}$" error={this.state.error.securityCode} value={this.state.securityCode} onChange={value => this.handleChange(value, 'securityCode')}/>
                    </FormLayout.Group>
                  </FormLayout>
                  <br/>
                  <Button submit fullWidth>Place your order</Button>
                </Card.Section>
              </Card>
            </Form>
          )}
        </Mutation>
      </Layout.Section>
    );
  }
}
export default CustomerInfoForm;
