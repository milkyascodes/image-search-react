import axios from 'axios'
import { useState } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

function App() {

  const [images, setimages] = useState([])
  const [notifi, setnotifi] = useState(null)
  const key = 'NaDUZl4mwnGvouVHJfCPS-FjCoie_cPhzc9bTaEWb6o'

  async function onSearchSubmit (term){
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params:{query:term},
      headers:{
        Authorization: `Client-ID ${key}`

      }
    })
   
    setimages(response.data.results);
    response.data.results.length === 0 ? setnotifi(true) :setnotifi(false)
  }

  return (
    <div >
      <SearchBar  notifi={notifi} submitting={onSearchSubmit}/>
      <ImageList props={images}/>
    </div>
  );
}

export default App;
