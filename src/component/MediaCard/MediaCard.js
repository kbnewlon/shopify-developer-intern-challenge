import React from 'react';
import '@shopify/polaris';



export default function MediaCard(){
    return(
<MediaCard
  title="Getting Started"
  primaryAction={{
    content: 'Learn about getting started',
    onAction: () => {},
  }}
  description="Discover how Shopify can power up your entrepreneurial journey."
  popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
>
  <img
    alt=""
    width="100%"
    height="100%"
    style={{
      objectFit: 'cover',
      objectPosition: 'center',
    }}
    src="https://burst.shopifycdn.com/photos/smiling-businesswoman-in-office.jpg?width=1850"
  />
</MediaCard>
    )};