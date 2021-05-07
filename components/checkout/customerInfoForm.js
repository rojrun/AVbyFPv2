import React from 'react';
import {Button, Card, Form, FormLayout, Layout, Select, TextField} from '@shopify/polaris';
import {Mutation} from 'react-apollo';
import MUTATE_ORDER_CUSTOMER_CREATE from '../../graphQL/mutateOrderCustomerCreate.js';

class CustomerInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
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
  handleSubmit = (event, customerAndOrder) => {
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
    customerAndOrder({variables: {
      customer_input: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        addresses: {
          address1: this.state.address1,
          address2: this.state.address2,
          city: this.state.city,
          zip: this.state.zip,
          company: this.state.company,
          country: "United States",
          province: this.state.state
        }
      },
      order_input: {

      }
    }});
    // this.resetFields();
  }

  resetFields = () => {
    this.setState({
      firstName: "",
      lastName: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      nameOnCard: "",
      cardNumber: "",
      mmYY: "",
      securityCode: "",
      error: {}
    });
  }

  render() {
    console.log("props: ", this.props);
    const stateOptions = [
      {label: '', value: ''},
      {label: 'Alabama', value: 'Alabama'},
      {label: 'Alaska', value: 'Alaska'},
      {label: 'American Samoa', value: 'American Samoa'},
      {label: 'Arizona', value: 'Arizona'},
      {label: 'Arkansas', value: 'Arkansas'},
      {label: 'California', value: 'California'},
      {label: 'Colorado', value: 'Colorado'},
      {label: 'Connecticut', value: 'Connecticut'},
      {label: 'Delaware', value: 'Delaware'},
      {label: 'District Of Columbia', value: 'District Of Columbia'},
      {label: 'Federated States of Micronesia', value: 'Federated States of Micronesia'},
      {label: 'Florida', value: 'Florida'},
      {label: 'Georgia', value: 'Georgia'},
      {label: 'Guam', value: 'Guam'},
      {label: 'Hawaii', value: 'Hawaii'},
      {label: 'Idaho', value: 'Idaho'},
      {label: 'Illinois', value: 'Illinois'},
      {label: 'Indiana', value: 'Indiana'},
      {label: 'Iowa', value: 'Iowa'},
      {label: 'Kansas', value: 'Kansas'},
      {label: 'Kentucky', value: 'Kentucky'},
      {label: 'Louisiana', value: 'Louisiana'},
      {label: 'Maine', value: 'Maine'},
      {label: 'Marshall Islands', value: 'Marshall Islands'},
      {label: 'Maryland', value: 'Maryland'},
      {label: 'Massachusetts', value: 'Massachusetts'},
      {label: 'Michigan', value: 'Michigan'},
      {label: 'Minnesota', value: 'Minnesota'},
      {label: 'Mississippi', value: 'Mississippi'},
      {label: 'Missouri', value: 'Missouri'},
      {label: 'Montana', value: 'Montana'},
      {label: 'Nebraska', value: 'Nebraska'},
      {label: 'Nevada', value: 'Nevada'},
      {label: 'New Hampshire', value: 'New Hampshire'},
      {label: 'New Jersey', value: 'New Jersey'},
      {label: 'New Mexico', value: 'New Mexico'},
      {label: 'New York', value: 'New York'},
      {label: 'North Carolina', value: 'North Carolina'},
      {label: 'North Dakota', value: 'North Dakota'},
      {label: 'Northern Mariana Islands', value: 'Northern Mariana Islands'},
      {label: 'Ohio', value: 'Ohio'},
      {label: 'Oklahoma', value: 'Oklahoma'},
      {label: 'Oregon', value: 'Oregon'},
      {label: 'Palau', value: 'Palau'},
      {label: 'Pennsylvania', value: 'Pennsylvania'},
      {label: 'Puerto Rico', value: 'Puerto Rico'},
      {label: 'Rhode Island', value: 'Rhode Island'},
      {label: 'South Carolina', value: 'South Carolina'},
      {label: 'South Dakota', value: 'South Dakota'},
      {label: 'Tennessee', value: 'Tennessee'},
      {label: 'Texas', value: 'Texas'},
      {label: 'Utah', value: 'Utah'},
      {label: 'Vermont', value: 'Vermont'},
      {label: 'Virginia', value: 'Virginia'},
      {label: 'Virgin Islands', value: 'Virgin Islands'},
      {label: 'Washington', value: 'Washington'},
      {label: 'West Virginia', value: 'West Virginia'},
      {label: 'Wisconsin', value: 'Wisconsin'},
      {label: 'Wyoming', value: 'Wyoming'}
    ];
    return (
      <Layout.Section primary>
        <Mutation mutation={MUTATE_ORDER_CUSTOMER_CREATE}>
          {(customerAndOrder, {loading, data, error, called, client}) => {
            console.log("loading: ", loading);
            console.log("data: ", data);
            console.log("error: ", error);
            console.log("called: ", called);
            console.log("client: ", client);
            return (
              <Form name="customerInfoForm" method="post" onSubmit={(event) => this.handleSubmit(event, customerAndOrder)} autoComplete={true} preventDefault={true}>
                <Card title="Customer Information">
                  <Card.Section>
                    <FormLayout>
                      <FormLayout.Group>
                        <TextField label="First name" name="firstName" id="firstName" type="text" pattern="^[a-zA-Z\-]+$" error={this.state.error.firstName} value={this.state.firstName} onChange={value => this.handleChange(value, 'firstName')}/>
                        <TextField label="Last name" name="lastName" id="lastName" type="text" pattern="^[a-zA-Z\-]+$" error={this.state.error.lastName} value={this.state.lastName} onChange={value => this.handleChange(value, 'lastName')}/>
                      </FormLayout.Group>
                      <TextField label="Company (optional)" name="company" id="company" type="text" pattern="^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$" value={this.state.company} onChange={value => this.handleChange(value, 'company')}/>
                      <TextField label="Shipping Address 1" name="address1" id="address1" type="text" pattern="^[a-zA-Z0-9\s,.'-()]{3,}$" error={this.state.error.address1} value={this.state.address1} onChange={value => this.handleChange(value, 'address1')}/>
                      <TextField label="Shipping Address 2" name="address2" id="address2" type="text" pattern="^[a-zA-Z0-9\s,.'-()]{3,}$" value={this.state.address2} onChange={value => this.handleChange(value, 'address2')}/>
                      <FormLayout.Group condensed>
                        <TextField label="City" name="city" id="city" type="text" pattern="^[a-zA-Z\- ]+$" error={this.state.error.city} value={this.state.city} onChange={value => this.handleChange(value, 'city')}/>
                        <Select label="State" name="state" id="state" type="text" options={stateOptions} error={this.state.error.state} value={this.state.state} onChange={value => this.handleChange(value, 'state')}/>
                        <TextField label="Zip code" name="zip" id="zip" type="text" pattern="^\d{5}([ \-]\d{4})?$" error={this.state.error.zip} value={this.state.zip} onChange={value => this.handleChange(value, 'zip')}/>
                      </FormLayout.Group>
                      <FormLayout.Group>
                        {/* <TextField label="Phone number" name="phone" id="phone" type="tel" pattern="^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$" placeholder="(555)555-5555" error={this.state.error.phone} value={this.state.phone} onChange={value => this.handleChange(value, 'phone')}/> */}
                        <TextField label="Phone number" name="phone" id="phone" type="tel" placeholder="1234567890" error={this.state.error.phone} value={this.state.phone} onChange={value => this.handleChange(value, 'phone')}/>
                        <TextField label="Email" name="email" id="email" type="email" pattern="^[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,125}[a-zA-Z]{2,63}$" error={this.state.error.email} value={this.state.email} onChange={value => this.handleChange(value, 'email')}/>
                      </FormLayout.Group>
                    </FormLayout>  
                  </Card.Section>
                </Card>
                <Card title="Billing Information">
                  <Card.Section>
                    {/* <FormLayout>
                      <FormLayout.Group> 
                        <TextField label="Name on card" name="nameOnCard" id="nameOnCard" type="text" pattern="^[a-zA-Z\- ]+$" error={this.state.error.nameOnCard} value={this.state.nameOnCard} onChange={value => this.handleChange(value, 'nameOnCard')}/>
                        <TextField label="Card number" name="cardNumber" id="cardNumber" type="text" pattern="^\d{16}$" error={this.state.error.cardNumber} value={this.state.cardNumber} onChange={value => this.handleChange(value, 'cardNumber')}/>
                      </FormLayout.Group>
                      <FormLayout.Group>
                        <TextField label="MM/YY" name="mmYY" id="mmYY" type="text" pattern="^\d{4}$" error={this.state.error.mmYY} value={this.state.mmYY} onChange={value => this.handleChange(value, 'mmYY')}/>
                        <TextField label="Security code" name="securityCode" id="securityCode" type="text" pattern="^\d{3}$" error={this.state.error.securityCode} value={this.state.securityCode} onChange={value => this.handleChange(value, 'securityCode')}/>
                      </FormLayout.Group>
                    </FormLayout> */}
                    <br/>
                    <Button submit fullWidth>Place your order</Button>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error. Please try again.</p>}
                  </Card.Section>
                </Card>
              </Form>
            );   
          }}
        </Mutation>
      </Layout.Section>
    );
  }
}
export default CustomerInfoForm;
