import React from "react";
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
//import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from 'apollo-link-context';

import Header from "./components/Header/index";
// import Container from "./components/Container"
import Home from "../src/pages/Home";
import LogIn from "./pages/LogIn";
import Review from "./pages/Review";
import SignUp from "./pages/SignUp";
import NavTab from "./components/NavTab";
import Footer from "./components/Footer/index";
// import StarRating from "./components/StarRating";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <NavTab />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/review" element={<Review />} />
            </Routes>
            <Footer />
         </Router> 
      
      </div>
       
    </ApolloProvider>
  );
}

export default App;
