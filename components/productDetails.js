import React from 'react';
import {Button, ButtonGroup, Card, Collapsible, DataTable, Layout, Stack, TextContainer, TextStyle} from '@shopify/polaris';
import Slideshow from '../components/slideshow.js';

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
      openDescription: false,
      openFeatures: false,
      openSpecifications: false,
      openContents: false
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

  handleOpenSection = (section) => {
    this.setState({[section]: !this.state[section]});
  }

  render() {
    return (
      <Layout.Section primary>
        <Card title={this.state.productToDisplay.node.title} key={this.state.productKey}>
          <Card.Section>
            <Stack distribution="trailing">
              <ButtonGroup>
                <TextStyle variation="strong">{this.state.variantTitle}&emsp;</TextStyle>
                <TextStyle variation="strong">${this.state.price}&emsp;</TextStyle>
                <Button monochrome outline>Buy</Button>
              </ButtonGroup>
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
                      <Button outline key={index} onClick={() => this.handleVariantDetails(title)}>{title}</Button> 
                    );
                  }) 
                }
              </ButtonGroup>
            </Stack>
          }>
            <Slideshow images={this.state.images}/>
          </Card.Section>
          {/* {this.state.productToDisplay.node.descriptionHtml} */}
          <Card.Section>
            <Stack vertical>
              <Button
                onClick={() => this.handleOpenSection('openDescription')}
                ariaExpanded={this.state.openDescription}
                ariaControls="description"
                fullWidth
                plain
                textAlign="left"
              >
                DESCRIPTION
              </Button>
              <Collapsible
                open={this.state.openDescription}
                id="description"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
              >
                <TextContainer>
                  <p>
                    The M-Series ATH-M30x professional monitor headphones combine modern engineering and high-quality materials to deliver a comfortable listening experience,
                    with enhanced audio clarity and sound isolation. Tuned for highly detailed audio, with strong mid-range definition, these versatile monitoring headphones 
                    are ideal in a variety of situations. Designed primarily for studio tracking and mixing, they offer added features for increased portability, making them a 
                    great choice for field recording.
                  </p>
                </TextContainer>
              </Collapsible>
            </Stack>
          </Card.Section>
          <Card.Section>
            <Stack vertical>
              <Button
                onClick={() => this.handleOpenSection('openFeatures')}
                ariaExpanded={this.state.openFeatures}
                ariaControls="features"
                fullWidth
                plain
                textAlign="left"
              >
                FEATURES
              </Button>
              <Collapsible
                open={this.state.openFeatures}
                id="features"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
              >
                <TextContainer>
                  <ul>
                    <li>Advanced build quality and engineering</li>
                    <li>40 mm drivers with rare earth magnets and copper-clad aluminum wire voice coils</li>
                    <li>Circumaural design contours around the ears for excellent sound isolation in loud environments</li>
                    <li>Tuned for enhanced low-frequency performance</li>
                    <li>Circumaural design contours around the ears for excellent sound isolation in loud environments</li>
                    <li>Convenient single-side cable exit</li>
                    <li>Collapsible for space-saving portability</li>
                    <li>Designed to excel for studio tracking, mixing and field recording</li>
                  </ul>
                </TextContainer>
              </Collapsible>
            </Stack>
          </Card.Section>
          <Card.Section>
            <Stack vertical>
              <Button
                onClick={() => this.handleOpenSection('openSpecifications')}
                ariaExpanded={this.state.openSpecifications}
                ariaControls="specifications"
                fullWidth
                plain
                textAlign="left"
              >
                SPECIFICATIONS
              </Button>
              <Collapsible
                open={this.state.openSpecifications}
                id="specifications"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
              >
                <DataTable
                  columnContentTypes={['text', 'text']}
                  rows={[
                    ['Tranducer Type', 'Dynamic neodymium magnet'],
                    ['Driver size', '40 mm'],
                    ['Voice Coil', 'Copper-clad aluminum wire'],
                    ['Sensitivity (1kHz)', '96 dB/mW'],
                    ['Impedance (1kHz)', '47 Ohms'],
                    ['Max. input power (1kHz)', '1300 mW'],
                    ['Frequency range', '15 Hz - 22,000 kHz'],
                    ['Net Weight (without cable)', '220 g (7.8 oz)'],
                    ["Cable Length", "3.0 m (9.8'), straight, left-side exit"]
                  ]}
                  headings={[null, null]}
                />
              </Collapsible>
            </Stack>
          </Card.Section>
          <Card.Section>
            <Stack vertical>
              <Button
                onClick={() => this.handleOpenSection('openContents')}
                ariaExpanded={this.state.openContents}
                ariaControls="contents"
                fullWidth
                plain
                textAlign="left"
              >
                CONTENTS
              </Button>
              <Collapsible
                open={this.state.openContents}
                id="contents"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
              >
                <TextContainer>
                  <ul>
                    <li>1x Audio-Technica ATH-M30x Headphones</li>
                    <li>1x 6.3 mm (1/4") screw-on adapter</li>
                    <li>1x Protective Carrying Pouch</li>
                    <li>1x Operator's Instructions</li>
                  </ul>  
                </TextContainer>
              </Collapsible>
            </Stack>
          </Card.Section>   
          <Card.Section title="What's in the Box">
            (pictures of contents)    
          </Card.Section>
          <Card.Section title="Accessories">
            (ids of accessories)    
          </Card.Section>
        </Card>       
      </Layout.Section>
    );   
  }
}
export default ProductDetails;
