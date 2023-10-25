import React, { useContext } from 'react';
import Feed from './feed';
import DataContext from './context/datacontext';

const Home = () => {
  
  const {searchResults,fetchError,isLoading}=useContext(DataContext)
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? (<Feed posts={searchResults} />) : <p style={{marginTop:"2rem"}}>No Post to display</p>)}
    </main>
  )
}

export default Home