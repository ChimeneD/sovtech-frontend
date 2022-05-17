import React from 'react';
import Layout from './components/layout';
import './App.css';
import Header from './components/pages/Header';

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default App;
