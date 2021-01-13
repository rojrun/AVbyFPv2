import React from 'react';
import {Card, ResourceList, Stack, TextStyle, Thumbnail, Layout, MediaCard, Page} from '@shopify/polaris';

const ProductResults = (props) => {
  console.log("productResults props: ", props);
  return (    
    <Card title="Results">
      <Card.Section>
        <MediaCard
          title={props.title}
          description={props.handle}
          size="small"
        >
          <img
            alt={props.images.edges[0].node.altText}
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            src={props.images.edges[0].node.originalSrc}
          />
        </MediaCard>
      </Card.Section>
    </Card>   
  );
};

export default ProductResults;