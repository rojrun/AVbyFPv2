import React from 'react';
import {Layout, Page} from '@shopify/polaris';
import ProductApplication from '../components/productApplication.js';

const Index = () => {
  return (
    <Page fullWidth title="Let us help You ...">
      <Layout>  
        <ProductApplication 
          title="Connect ..."
          links={[
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
          ]}
        />
        <ProductApplication 
          title="Perform ..."
          links={[
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
          ]}
        />
        <ProductApplication 
          title="Create ..."
          links={[
            {
              topLevel: "Recorders",
              tags: "recorders"
            }
          ]}
        />
        <ProductApplication 
          title="Present ..."
          links={[
            {
              topLevel: "with high powered Projectors",
              tags: "projector"
            },
            {
              topLevel: "your streaming content with A/V Switchers",
              tags: "av switcher"
            }
          ]}
        />
        <ProductApplication 
          title="Entertain ..."
          links={[
            {
              topLevel: "your events with pro Lighting",
              subLink: ["centerpiece lighting", "dance floor", "pinspots", "uplights", "washes"]
            },
            {
              topLevel: "your audience with a DJ performance",
              subLink: ["all-in-one", "controllers"]
            }
          ]}
        />
        <ProductApplication 
          title="Deals ..."
          links={[
            {
              topLevel: "Time Sensitive Specials",
              tags: ["bundles", "rebates"]
            },
            {
              topLevel: "Open Box Specials",
              tags: "open box"
            }
          ]}
        />
      </Layout> 
    </Page>
  ); 
}
export default Index;
