import React from 'react';
import {Layout, Page} from '@shopify/polaris';
import ProductApplication from '../components/productApplication.js';

const Index = () => {
  const applications = [
    {
      "Connect ...": [
        {
          topLevel: "with others from Home",
          subLink: ["headphones", "usb microphone"]
         },
        {
          topLevel: "with Huddle Spaces and Conference Rooms",
          subLink: ["microphone", "processing", "speakers", "video endpoint"]
         },
        {
          topLevel: "Accessories",
          tag: "accessories"
        }
      ]
    },
    {
      "Perform ...": [
        {
          topLevel: "Microphones",
          tag: "microphone"
        },
        {
          topLevel: "Mixers",
          tag: "mixers"
        },
        {
          topLevel: "PA",
          tag: "pa"
        },
        {
          topLevel: "Stage Lighting",
          tag: "stage lighting"
        },
        {
          topLevel: "Accessories",
          tag: "accessories"
        }
      ]
    },
    {
      "Create ...": [
        {
          topLevel: "Recorders",
          tag: "recorders"
        }
      ]
    },
    {
      "Present ...": [
        {
          topLevel: "with high powered Projectors",
          tag: "projector"
        },
        {
          topLevel: "your streaming content with A/V Switchers",
          tag: "av switcher"
        }
      ]
    },
    {
      "Entertain ...": [
        {
          topLevel: "your events with pro Lighting",
          subLink: ["centerpiece lighting", "dance floor", "pinspots", "uplights", "washes"]
        },
        {
          topLevel: "your audience with a DJ performance",
          subLink: ["all-in-one", "controllers"]
        }
      ]
    },
    {
      "Deal ...": [
        {
          topLevel: "Time Sensitive Specials",
          tag: ["bundles", "rebates"]
        },
        {
          topLevel: "Open Box Specials",
          tag: "open box"
        }
      ]
    }
  ];

  return (
    <Page singleColumn title="Let us help You ...">
      <Layout>  
        <ProductApplication applications={applications}/>
      </Layout> 
    </Page>
  ); 
}
export default Index;
