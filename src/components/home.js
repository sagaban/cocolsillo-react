import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './layout';

const Home = () => (
  <Layout>
    <p>Hello World of React and Webpack!</p>
    <p>
      <Link to='/dynamic'> Navigate to Dynamic Page </Link>
    </p>
  </Layout>
);

export default Home;