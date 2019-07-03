import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/layout';
import Search from '../components/Search';
import SEO from '../components/seo';

const IndexPage = () => (
  <Router>
    <Layout>
      <SEO title="Home" />
      <Search />
    </Layout>
  </Router>
);

export default IndexPage;
