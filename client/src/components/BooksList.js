import React, { Component } from "react";
import { compose, graphql } from "react-apollo";

import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayBooks() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading</div>;
    } else {
      return data.books.map(book => (
        <li key={book.id}>
          {book.name} - {book.genre} - {book.author.name}
        </li>
      ));
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
