import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';
import ProductAddedConfirmation from '../components/productAddedConfirmation.js';
import store from 'store-js';
import '../scss/_productDetails.module.scss';

// Displays product information when product is clicked from ProductResults Component
class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productToDisplay: {},
      productKey: "",
      variants: [],
      variantTitle: "",
      images: [],
      price: "",
      modalOpen: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.productToDisplay !== state.productToDisplay) {
      if (!props.productToDisplay.node.hasOnlyDefaultVariant) {
        const variants = props.productToDisplay.node.variants.edges.reduce((variants, current) => {
          return variants.concat([current.node.title])
        }, []);
        const variantTitle = variants[0];
        const images = props.productToDisplay.node.images.edges.filter((image) => {
          return image.node.altText === variantTitle;
        });
        return {
          productToDisplay: props.productToDisplay,
          productKey: props.productKey,
          variants,
          variantTitle,
          images,
          price: props.productToDisplay.node.variants.edges[0].node.price
        }    
      }
      return {
        productToDisplay: props.productToDisplay,
        productKey: props.productKey,
        variants: null,
        variantTitle: null,
        images: props.productToDisplay.node.images.edges,
        price: props.productToDisplay.node.variants.edges[0].node.price
      }
    }
    return null;
  }

  componentDidMount() {
    document.querySelectorAll("button[ref=section]").forEach((button) => {
      button.addEventListener("click", this.handleDisplaySection);
    });
  }

  componentWillUnmount() {
    document.querySelectorAll("button[ref=section]").forEach((button) => {
      button.removeEventListener("click", this.handleDisplaySection);
    });
  }

  handleVariantDetails = (title) => {
    const images = this.state.productToDisplay.node.images.edges.filter((image) => {
      return image.node.altText === title;
    });
    const variantElement = this.state.productToDisplay.node.variants.edges.filter((variant) => {
      return variant.node.title === title;
    });
    this.setState({
      images,
      price: variantElement[0].node.price,
      variantTitle: title
    });
  }

  handleDisplaySection = (event) => {
    const evt = event.currentTarget;
    const controlElem = evt.getAttribute("aria-controls");
    const isExpanded = evt.getAttribute("aria-expanded");
    const element = document.getElementById(controlElem);
    const plusIcon = evt.getElementsByTagName("svg")[0];
    const minusIcon = evt.getElementsByTagName("svg")[1];
    if (isExpanded === "false") {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block"; 
      this.expandSection(element);
      evt.setAttribute("aria-expanded", "true");
    } else {
      minusIcon.style.display = "none"; 
      plusIcon.style.display = "block";
      this.collapseSection(element);
      evt.setAttribute("aria-expanded", "false");
    }  
  }
  expandSection = (element) => {
    const sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + "px";
    element.addEventListener("transitioned", function(e) {
      element.removeEventListener("transitioned", arguments.callee);
      element.style.height = null;
    });
    element.setAttribute("aria-hidden", "false");
  }
  collapseSection = (element) => {
    const sectionHeight = element.scrollHeight;
    let elementTransition = element.style.transition;
    element.style.transition = "";
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;
      requestAnimationFrame(function() {
        element.style.height = 0 + "px";
      });
    });
    element.setAttribute("aria-hidden", "true");
  }

  handleAddToCart = (product, variantTitle = null) => {
    this.setState({modalOpen: !this.state.modalOpen});
  
    // Check if cart exist in local storage
    let cart = [];
    if (store.get('cart')) {
      cart = store.get('cart');
    }

    // Check if product has a variant
    const lineItem = {};
    if (product.node.hasOnlyDefaultVariant) {
      lineItem.product = product;  
    } else {
      // Restructure product by removing variants elements that are not equal to variantTitle
      const productWithVariant = {};
      Object.entries(product).map(([firstLayerKey, firstLayerValue]) => {
        if (firstLayerKey !== "node") {
          productWithVariant[firstLayerKey] = firstLayerValue;
          return productWithVariant;
        }

        const nodeObj = {};
        Object.entries(firstLayerValue).map(([secondLayerKey, secondLayerValue]) => {
          if (secondLayerKey !== "variants") {
            nodeObj[secondLayerKey] = secondLayerValue;
            productWithVariant[firstLayerKey] = nodeObj;
            return productWithVariant;
          }

          const variantsObj = {};
          Object.entries(secondLayerValue).map(([thirdLayerKey, thirdLayerValue]) => {
            if (thirdLayerKey !== "edges") {
              variantsObj[thirdLayerKey] = thirdLayerValue;
              nodeObj[secondLayerKey] = variantsObj;
              productWithVariant[firstLayerKey] = nodeObj;
              return productWithVariant;
            }

            const edgesArray = thirdLayerValue.filter((variant) => {
              return variant.node.title === variantTitle;
            });
            variantsObj[thirdLayerKey] = edgesArray;
            nodeObj[secondLayerKey] = variantsObj;
            productWithVariant[firstLayerKey] = nodeObj;
            return productWithVariant;
          });
        });
      });
      lineItem.product = productWithVariant; 
    }
    
    // Check if product already exist in cart
    if (cart.some(item => item.product.node.id === product.node.id)) {
      if (product.node.hasOnlyDefaultVariant) {  /* if product doesn't have variants */
        const productIndex = cart.findIndex(item => item.product.node.id === product.node.id);
        cart[productIndex].quantity++;
      } else {
        const variantIndex = cart.findIndex(item => item.product.node.variants.edges[0].node.title === variantTitle);
        if (variantIndex >= 0) {  /* if product variant exist */
          cart[variantIndex].quantity++;
        } else {
          lineItem.quantity = 1;
          cart.push(lineItem);
        }    
      }  
    } else {
      lineItem.quantity = 1;
      cart.push(lineItem);
    }
    store.set('cart', cart);
  }

  handleCloseModal = () => {
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {   
    const activator = <Button monochrome outline onClick={() => {this.handleAddToCart(this.state.productToDisplay, this.state.variantTitle)}}>Buy</Button>;
    return (
      <Layout.Section primary>
        <Card title={this.state.productToDisplay.node.title} key={this.state.productKey}>
          <Card.Section>
            <Stack alignment="baseline" distribution="equalSpacing">  
              <Stack.Item>
                <TextStyle variation="strong">{this.state.variantTitle}</TextStyle>
              </Stack.Item>
              <Stack.Item>
                <TextStyle variation="strong">${this.state.price}</TextStyle>
              </Stack.Item>
              <Stack.Item>
                <ProductAddedConfirmation activator={activator} open={this.state.modalOpen} onClose={this.handleCloseModal} 
                  product={this.state.productToDisplay} variant={this.state.variantTitle} image={this.state.images[0].node.originalSrc} price={this.state.price}
                />
              </Stack.Item>
            </Stack>
          </Card.Section>
          <Card.Section title={
            <Stack distribution="center">
              <ButtonGroup segmented>
                {
                  (this.state.variants === null) || !(this.state.variants.length > 1)
                  ? <div style={{height: "4rem"}}></div>
                  : this.state.variants.map((title, index) => {
                    return (
                      <Button outline key={index} onClick={() => {this.handleVariantDetails(title)}}>{title}</Button> 
                    );
                  }) 
                }
              </ButtonGroup>
            </Stack>
          }>
            <Slideshow images={this.state.images}/>
          </Card.Section>
          <div className="rawData" dangerouslySetInnerHTML={{__html: this.state.productToDisplay.node.descriptionHtml}}></div>
          <Card.Section title="What's in the Box">
            Stuff
          </Card.Section>
          <Card.Section title="Accessories">
            Stuff
          </Card.Section>
        </Card>       
      </Layout.Section>
    );   
  }
}
export default ProductDetails;
