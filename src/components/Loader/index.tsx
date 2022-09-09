import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader: React.FC = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="125" cy="125" r="125" />
    <rect x="-9" y="286" rx="0" ry="0" width="278" height="36" />
    <rect x="2" y="353" rx="0" ry="0" width="266" height="56" />
  </ContentLoader>
);
