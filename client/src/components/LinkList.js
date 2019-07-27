import React, { Component } from "react";
import { getLinksQuery } from "../queries/queries";
import { graphql } from "react-apollo";

class LinkList extends Component {
  render() {
    const { allLinks } = this.props.data;

    return (
      <div>
        {allLinks &&
          allLinks.map(link => (
            <ul key={link.id}>
              <li>
                <p>{link.description}</p>
                <div>{link.url}</div>
              </li>
            </ul>
          ))}
        Text
      </div>
    );
  }
}

export default graphql(getLinksQuery)(LinkList);
