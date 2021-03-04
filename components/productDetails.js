import React from 'react';
import {Button, ButtonGroup, Card, Layout, Stack, TextStyle} from '@shopify/polaris';
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
      price: ""
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
          return image.node.altText === variants[0];
        });
        const price = props.productToDisplay.node.variants.edges[0].node.price;
        return {
          productToDisplay: props.productToDisplay,
          productKey: props.productKey,
          variants,
          variantTitle,
          images,
          price
        }    
      } else {  
        return {
          productToDisplay: props.productToDisplay,
          productKey: props.productKey,
          variants: null,
          variantTitle: null,
          images: props.productToDisplay.node.images.edges,
          price: props.productToDisplay.node.variants.edges[0].node.price
        }
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

  handleOpenSection = () => {
    console.log("clicked");
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
                  this.state.variants === null 
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
          <Card.Section title="test" >
            <Button onClick={() => this.handleOpenSection()}>click</Button>
            <h1>Hi World!</h1>
          </Card.Section>
          <Card.Section title="Description">
                <p>A classic microphone with a distinctive timbre especially designed for recording of solo vocals and solo instruments.<br/><br/>
                With the introduction of the NeXt Generation C 414 B-XL models, AKG sets new benchmarks for useful features, improved technical specifications, 
                ease of use and available accessories. All of these improvements are answers to requests from ever-demanding recording studios, 
                broadcast stations and concert engineers, but with the basic sonic character of the legendary C 414 unaltered.</p>
          </Card.Section>
          <Card.Section title="Features">      
                <ul>
                <li>High sensitivity and extremely low self noise</li>
                <li>Five switchable polar patterns for placement and application flexibility</li>
                <li>Two-color LEDs provide quick visual indication of selected polar pattern and output overload</li>
                <li>Elastic capsule suspension greatly minimizes structurally-transmitted noise from chassis vibration</li>
                <li>H 85 professional shock mount/stand adapter, PF 80 external pop filter and W 414 X external windscreen.</li>
                <li>High sound pressure level capability and wide dynamic range</li>
                <li>Completely immune to electrostatic and electromagnetic interference from digital gear, computer monitors, etc. thanks to solid metal housing and transformerless output stage</li>
                <li>Three switchable bass cut filters and three pre-attenuation pads with LEDs for quick visual indication</li>
                <li>All switchable components operate in low impedance circuits for ultra-high reliability even in extremely humid conditions</li>
                </ul>
          </Card.Section>
          <Card.Section title="Specifications">  
                <table>
                <tbody>
                <tr >
                <td style={{textAlign: 'left'}}>Polar pattern</td>
                <td>Omnidirectional, wide cardioid, cardioid, hypercardioid, figure eight</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Sensitivity</td>
                <td>23 mV/Pa (-33 dBV) ± 0.5 dB</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Max. SPL</td>
                <td>200/400/800/1600 Pa = 140/146/152/158 dB (0/-6/-12/-18 dB) for 0.5% THD</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Equivalent noise level</td>
                <td>6 dB-A (0 dB preattenuation) (IEC 60268-4)</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Signal/noise ratio (A-weighted)</td>
                <td>88 dB</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Preattenuation pad</td>
                <td>-6 dB, -12 dB, -18 dB, switchable</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Bass cut filter slope</td>
                <td>12 dB/octave at 40 Hz and 80 Hz; 6 dB/octave at 160 Hz</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Impedance</td>
                <td>&lt;=200 ohms</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Recommended load impedance</td>
                <td>&gt;= 2,200 ohms</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Supply voltage</td>
                <td>48 V phantom power to DIN/IEC</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Current consumption</td>
                <td>approximately 4.5 mA</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Dynamic range</td>
                <td>134 dB minimum</td>
                </tr>
                <tr>
                <td style={{textAlign: 'left'}}>Connector</td>
                <td>3-pin XLR to IEC</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Dimensions</td>
                <td>50 x 38 x 160 mm (2.0 x 1.5 x 6.3 in.)</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Net weight</td>
                <td>300 g (10.6 oz.)</td>
                </tr>
                <tr >
                <td style={{textAlign: 'left'}}>Patent(s)</td>
                <td>Electrostatic transducer (Patent no. AT 395.225, DE 4.103.784, JP 2.815.488)</td>
                </tr>
                </tbody>
                </table>
          </Card.Section>      
          <Card.Section title="Contents">  
            <ul>
              <li>(1) AKG C414 XLS Microphone</li> 
              <li>(1) H 85 shock mount</li> 
              <li>(1) PF 80 pop screen</li> 
              <li>(1) W 414X foam windscreen</li> 
              <li>(1) High quality carrying case for microphone and standard accessories</li>  
            </ul>  
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
