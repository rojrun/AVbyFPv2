import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {
  Card,
  ResourceList,
  Stack,
  TextStyle,
  Thumbnail
} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';

class Headphones extends React.Component {
  static contextType = Context;

  render() {
      
    return (
      <h1>Headphones</h1>
    );

  };
}

export default Headphones;