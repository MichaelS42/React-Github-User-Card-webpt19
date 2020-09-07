import React, { useState, useEffect } from "react";
import axios from "axios";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      userInfo: [],
    };
  }

  componentDidMount(id) {
    axios.get(`https://api.github.com/users/${id}`, id)
    .then((res) => {
      this.setState({ user: res.data.id });
      return res.data})
      .then(res => {
          axios.get(res)
          .then(res => {
              this.setState({
                  ...this.state,
                  userInfo: res.data
              })
          })
      })
  }

  //   const formSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("submitted!");
  //     axios
  //       .post(`https://api.github.com/users/${id}`, formState)
  //       .then((res) => {
  //         setPost(res.data); // get just the form data from the REST api
  //         console.log("success", res);
  //       })
  //       .catch((err) => console.log(err.response));
  //   };

  render() {
    return (
      <form>
          <h1>{this.state.userInfo}</h1>
          <h1>{this.state.user}</h1>
        <label htmlFor="name">
          name
          <input type="text" name="name" />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
