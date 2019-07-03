import React from 'react';
import Layout from '../components/layout';
import DetailPage from '../components/DetailPage';

export default props => (
  <Layout>
    <DetailPage {...props} />
  </Layout>
);
