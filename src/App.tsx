import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri:"https://graphql.anilist.co",
  cache : new InMemoryCache()
})



function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App
