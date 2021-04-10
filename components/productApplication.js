import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack} from '@shopify/polaris';
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
      subLinkToShow: []
    }
  }

  componentDidMount() {
    this.setState({app: this.context});
  }

  // If links has subLinks, show buttons
  showSubLinks = (links, firstIndex, secondIndex) => {
    if (!links.subLink) {
      this.redirectToProductResults(links.tag);
    } else {
      const subLinkToShow = this.props.applications[firstIndex][Object.keys(this.props.applications[firstIndex])[0]][secondIndex].subLink;
      this.setState({subLinkToShow});
    }
  }

  redirectToProductResults = (tag) => {
    store.remove('tag');
    store.set('tag', tag);
    const redirect = Redirect.create(this.state.app);
    redirect.dispatch(
      Redirect.Action.APP,
      '/products',
    );   
  };

  render() {
    return (
      <React.Fragment>
        {
          this.props.applications.map((application, firstIndex) => {
            return (
              <Layout.Section secondary key={firstIndex}>
                <Card sectioned title={Object.keys(application)} key={firstIndex}>
                  {
                    Object.values(application)[0].map((links, secondIndex) => {
                      return (
                        <Card.Section key={secondIndex}>
                          <Button 
                            plain
                            textAlign="left"
                            key={secondIndex}
                            onClick={() => {this.showSubLinks(links, firstIndex, secondIndex)}}
                          >
                            {links.topLevel}
                          </Button>
                          {
                            links.subLink && (links.subLink === this.state.subLinkToShow)
                            ? <Stack distribution="right">
                                <ButtonGroup>
                                  {
                                    links.subLink.map((subLink, index) => {
                                      return (
                                        <Button
                                          plain
                                          key={index}
                                          onClick={() => {this.redirectToProductResults(subLink)}}
                                        >
                                          {subLink}
                                        </Button>
                                      )
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
          })
        }
      </React.Fragment>
    );
  }    
}
export default ProductApplication;
