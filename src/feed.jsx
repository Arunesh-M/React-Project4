import React, { useContext } from 'react';
import Post from './post';
import DataContext from './context/datacontext';

const Feed = () => {
  
  const {searchResults}=useContext(DataContext)
  return (
    <>
      {searchResults.map((post)=>(
       <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default Feed