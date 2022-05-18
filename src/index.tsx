import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Search from './pages/Search';

import './index.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Character from './pages/Character';
import Layout from './components/layout';

const link = from([
  new HttpLink({
    uri: process.env.REACT_APP_BACKEND_SERVER_URL,
    credentials: 'included',
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/search' element={<Search />} />
            <Route path='/character' element={<Character />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ApolloProvider>
  </React.StrictMode>,
);
