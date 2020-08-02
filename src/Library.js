import React, { Component } from "react";
import "./styles.css";

class Book extends Component {
  state = {
    star: false
  };

  toggleStarOrUnstar = () => {
    this.setState(prevstate => ({
      star: !prevstate.star
    }));
  };

  render() {
    const { title, author, pages } = this.props;
    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{pages}</td>
        <td>
          <button onClick={this.toggleStarOrUnstar}>
            {this.state.star
              ? String.fromCharCode(9733)
              : String.fromCharCode(9734)}
          </button>
        </td>
      </tr>
    );
  }
}

export class Library extends Component {
  state = {
    like: false
  };

  toggleLikeOrUnlike = () => {
    this.setState(prevstate => ({
      like: !prevstate.like
    }));
  };

  render() {
    const { books } = this.props;
    return (
      <div>
        <h2 className="librarytitle">High IQ Godhumapindi Public Library</h2>
        <p className="welcometext">
          Welcome to the best library in the world. You can find most popular
          books written by most popular and most wanted authors in our library
        </p>
        <div className="likediv">
          <p>
            Do you like our library?{" "}
            <b className={this.state.like ? "liked" : "unliked"}>
              {this.state.like ? "Yes" : "No"}
            </b>
          </p>
          <button style={{ width: "70px" }} onClick={this.toggleLikeOrUnlike}>
            <span className={this.state.like ? "unliked" : "liked"}>
              <b>{this.state.like ? "UnLike" : "Like"}</b>
            </span>
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Book title</th>
              <th>Book author</th>
              <th>No of pages</th>
              <th>Favourites</th>
            </tr>
            {books.map((book, i) => (
              <Book
                key={i}
                title={book.title}
                author={book.author}
                pages={book.pages}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
