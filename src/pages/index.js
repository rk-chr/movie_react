import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Search from '../components/Search';
import SEO from '../components/seo';
import DetailPage from '../components/DetailPage';

const IndexPage = () => (
  <Router>
    <Layout>
      <SEO title="Home" />
      <Search />
      <Route path="title/:id" component={DetailPage} />
    </Layout>
  </Router>
);

export default IndexPage;
