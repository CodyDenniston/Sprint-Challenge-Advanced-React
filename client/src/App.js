import React from 'react';
import UserCard from "./Components/UserCard";
import Header from "./Components/Header";
import axios from "axios"
import './App.css';
import SearchBar from './Components/SearchBar';
import {
  Link,
  Switch,
  Route
} from "react-router-dom";




class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: [],

    };
    console.log('constructor is running');
  }
  

  componentDidMount(){
    this.usersGet()
  }

  usersGet = () => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU is running');
    if (prevState.user !== this.state.user) {
      console.log('user state has updated!');
    }
    if (prevProps.customerId !== this.props.customerId) {
      // fetch new customer data and run setState
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    console.log(window.innerHeight, window.innerWidth);
  }

  render() {
    console.log('rendering App component', this.state.user.length);
    return (
      <div className="App">
      <main>
      <Header/>
      <Switch>

        <Route exact path="/">
        <UserCard user={this.state.user} />
        </Route>

        <Route exact path="/SearchForm">
        <SearchBar />
        </Route>
        
      </Switch>
      </main>
        
      </div>
    );
  }
}

export default App;
