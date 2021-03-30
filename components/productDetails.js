import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';
import PreviewCart from '../components/previewCart.js';
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

  handleAddToCart = (product, variantTitle) => {
    const cart = [];
    const quantityProd = {};
    quantityProd.quantity = 1;
    quantityProd.product = product;
    
    console.log("quantityProd: ", quantityProd);
    
    if (!variantTitle) {
      cart.push(quantityProd);
      console.log("cart: ", cart);
      store.set('cart', cart);
    } else {
      const productVariant = product.node.variants.edges.filter((variant) => {
        return variant.node.title === variantTitle;
      });
      store.set('cart', product);
      store.set('product_variant', productVariant);
    }
    this.setState({modalOpen: !this.state.modalOpen});
  }

  handleCloseModal = () => {
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {   
    return (
      <Layout.Section primary>
        <PreviewCart activator={this.handleAddToCart} open={this.state.modalOpen} onClose={this.handleCloseModal} 
          product={this.state.productToDisplay} variant={this.state.variantTitle} image={this.state.images[0].node.originalSrc} price={this.state.price}
        />
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
                <Button monochrome outline onClick={() => {this.handleAddToCart(this.state.productToDisplay, this.state.variantTitle)}}>Buy</Button>
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
            {/* <Slideshow images={this.state.images}/>     */}
          </Card.Section>
          <Card.Section title="Accessories">
            {/* <Slideshow images={this.state.images}/> */}
          </Card.Section>
        </Card>       
      </Layout.Section>
    );   
  }
}
export default ProductDetails;
