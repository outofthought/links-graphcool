import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import LinkList from "./LinkList";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjylbd3a304gj0156uzcfblp7"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>TEXT from APP</div>
        <LinkList />
      </ApolloProvider>
    );
  }
}

export default App;
