import React, {useState,useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';

const Test = () => {
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    fetch('https://reactnative.dev/movies.json')
      .then(response=> response.json())                 // get response in json format
      .then(json => setMovies(json))                    // put that json into state. thats it.
      .catch(error=>console.error(error))
  })
// The fetch call is passed the URL, the response is then parsed.
// The setData is used to to set the state of the data which contains the response json.
// The data state can be used throughout the component. Errors are then handled.
// The finally block is executed after the call is complete, and it sets the isLoading state to false.

  return(
    <>
    <Text>{movies.title}</Text>
    <FlatList data={movies.movies} renderItem={({item})=> <Text>{item.title}</Text>} />
    </>
  )
}

export default Test;