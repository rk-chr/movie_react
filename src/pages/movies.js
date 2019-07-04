import React from 'react';
import Layout from '../components/layout';
import DetailPage from '../components/DetailPage';
import Search from '../components/Search';

export default props => (
  <Layout>
    <Search />
    <DetailPage {...props} />
  </Layout>
);
