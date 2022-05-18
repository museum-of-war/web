import React from 'react';
import ContentTopConnected from './ContentTopConnected';
import ContentTopNotConnected from './ContentTopNotConnected';

type ContentTopProps = {
  signerAddress: string;
};

const ContentTop = ({ signerAddress }: ContentTopProps) => {
  return signerAddress ? <ContentTopConnected /> : <ContentTopNotConnected />;
};

export default ContentTop;
