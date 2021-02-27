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
      subLinkToShow: [],
      // links: []
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.links !== state.links) {
  //     return {links: props.links}
  //   }
  //   return null;
  // }

  componentDidMount() {
    this.setState({app: this.context});
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("should state: ", nextState.links);
  //   return this.state.links.showLinks !== nextState.links.showLinks;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   if (this.state.links.showLinks !== prevState.links.showLinks) {
  //     return this.state.links.showLinks;
  //   }
  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (snapshot !== null) {
  //     this.setState({links: this.state.links[index].showLinks = true});
  //   }
  // }

  showSubLinks = (links, index) => {
    console.log("Link: ", links);
    if (!links.subLink) {
      this.redirectToProductResults(links);
    } else {
      this.setState({subLinkToShow: links.subLink});
      // this.setState({links: this.state.links[index].showLinks = true});
      // this.setState({subLinkToShow: true});
    }
  }

  redirectToProductResults = (link) => {
    // console.log("redirect link: ", link);
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
      <React.Fragment>
        {
          this.props.applications.map((application, index) => {
            return (
              <Layout.Section secondary key={index}>
                <Card sectioned title={Object.keys(application)} key={index}>
                  {
                    Object.values(application)[0].map((links, index) => {
                      console.log("Links: ", links);
                      return (
                        <Card.Section key={index}>
                          <Link
                            key={index}
                            onClick={() => {this.showSubLinks(links, index)}}
                          >
                            {links.topLevel}
                          </Link>
                          {
                            this.state.subLinkToShow
                            ? <Stack distribution="center">
                                <ButtonGroup>
                                  {
                                    this.state.subLinkToShow.map((subLink, index) => {
                                      return (
                                        <Button key={index}>
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
