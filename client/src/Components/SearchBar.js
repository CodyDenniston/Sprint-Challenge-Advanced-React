import React, {useEffect, useState} from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import UserCard from "./UserCard"
import axios from 'axios'


const SearchBar = ( props ) => {
  const [nameList, setNameList] = useLocalStorage([]);

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res);
        setNameList( res.data );
      })
      .catch(error => {
        console.log(error);
      });
  const users = nameList;
  console.log(props.users)
 
  useEffect(() => {
    const searchResults = users.filter( user =>
      user.name.includes( search )
    );
    setResults( searchResults );
  }, [search]);

  const handleChange = e => {
    setSearch( e.target.value );
  };

      
      return (
          <section className="search-form">
     Search by name here
    <form>
      <label>
        Name:
      <input
      id="name"
      type="text"
      name="textfield"
      placeholder="Search"
      value={ search }
      onChange={ handleChange }
      />
      </label>
    </form>
     
    <div className="user-list">
      
           <UserCard user={results} />
          
      
      </div>

    </section>
  );
  
};



export default SearchBar;