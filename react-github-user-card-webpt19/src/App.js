import React, { Component } from "react";
import axios from 'axios';
import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user:[],
      followers:[],
      userInfo: ""
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/MichaelS42")
    .then(res => {
    this.setState({user: res.data})
      return res.data.followers_url})
    .then(res => {
      axios.get(res)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
    })

  }

  render() {
    return (
    <div className="App">
      <Form /> 
      <UserCard data={this.state.user}/>
      {this.state.followers.map(follower => <FollowerCard follower={follower} /> )}
    </div>
    );
  }
}

export default App;
