import {useState,useEffect} from 'react';

export default (initialState) => {

const [quotes,setQuotes] = useState(initialState);

const [updateQuotes,upQuotes] = useState(initialState)

const [errorMessage,setErrorMessage] = useState("");
  
  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(jsonResponse => setQuotes(jsonResponse))
    .catch(err => setErrorMessage(err));
  },[])
 
  return {
    updateQuotes,
    save : () => {
         upQuotes(quotes[Math.floor(Math.random()*quotes.length)]);
    },
    errorMessage
  };
}