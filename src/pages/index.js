import React from 'react';

import Layout from '../components/layout';
import Movies from '../components/Movies';
import Search from '../components/Search';
import DetailPage from '../components/DetailPage';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Search />
    <Movies />
    <DetailPage />
  </Layout>
);

export default IndexPage;
