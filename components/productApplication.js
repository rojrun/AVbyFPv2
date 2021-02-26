import React from 'react';
import {Button, ButtonGroup, Card, Layout, Link, Stack} from '@shopify/polaris';
import store from 'store-js';
import {Redirect} from '@shopify/app-bridge/actions';
import {Context} from '@shopify/app-bridge-react';

// Child component for index.js. Display menu links in home page.
class ProductApplication extends React.Component {
  static contextType= Context;
  constructor(props) {
    super(props);
    this.state = {
      app: {},
      subLinkToShow: false
    }
  }

  componentDidMount() {
    this.setState({app: this.context});
  }

  showSubLink = (link, index) => {
    console.log("link: ", this.props.links[index].subLink);
    if (!link.subLink) {
      this.redirectToProductResults(link);
    } else {
      this.setState({subLinkToShow: true});
      // this.setState({subLinkToShow: this.props.links[index].subLink});
    }
  }

  redirectToProductResults = (link) => {
    console.log("redirect link: ", link);
    store.remove('tags');
    store.set('tags', link.tags);
    const redirect = Redirect.create(this.state.app);
    redirect.dispatch(
      Redirect.Action.APP,
      '/products',
    );   
  };

  // capitalizeFirstLetter = (str) => {
  //   str += 's';
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }

  render() {
    return (
      <Layout.Section secondary>
        <Card sectioned title={this.props.title}>
          {
            this.props.links.map((link, index) => {
              console.log("LInk: ", link);
              return (
                <Card.Section key={index}>
                  <Link
                    key={index}
                    onClick={() => {this.showSubLink(link, index)}}
                  >
                    {link.topLevel}
                  </Link>
                  { 
                    this.state.subLinkToShow && link.subLink
                    // this.state.subLinkToShow
                    ? <Stack distribution="center">
                        <ButtonGroup>
                          {
                            link.subLink.map((link, index) => {  
                              return (
                                <Button outline key={index}>
                                  {link}  
                                </Button>                        
                              );
                            })
                          }
                        </ButtonGroup>
                      </Stack>
                    : null
                  }
                </Card.Section>
              );
            })
          }
        </Card>
      </Layout.Section>
    );
  }
}
export default ProductApplication;
