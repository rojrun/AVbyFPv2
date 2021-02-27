import React from 'react';
import {Button, ButtonGroup, Card, Layout, Link, Page, Stack} from '@shopify/polaris';
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
          tags: "accessories"
        }
      ]
    },
    {
      "Perform ...": [
        {
          topLevel: "Microphones",
          tags: "microphone"
        },
        {
          topLevel: "Mixers",
          tags: "mixers"
        },
        {
          topLevel: "PA",
          tags: "pa"
        },
        {
          topLevel: "Stage Lighting",
          tags: "stage lighting"
        },
        {
          topLevel: "Accessories",
          tags: "accessories"
        }
      ]
    },
    {
      "Create ...": [
        {
          topLevel: "Recorders",
          tags: "recorders"
        }
      ]
    },
    {
      "Present ...": [
        {
          topLevel: "with high powered Projectors",
          tags: "projector"
        },
        {
          topLevel: "your streaming content with A/V Switchers",
          tags: "av switcher"
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
          tags: ["bundles", "rebates"]
        },
        {
          topLevel: "Open Box Specials",
          tags: "open box"
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
