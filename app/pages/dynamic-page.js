import React from 'react';
import Layout from 'components/layout';

const DynamicPage = () => (
  <Layout>
    <header as='h2'>Dynamic Page</header>
    <p>This page was loaded asynchronously!!!</p>
  </Layout>
);

export default DynamicPage;
