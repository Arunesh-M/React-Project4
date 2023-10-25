import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import './posts.css';
import './nav.css';
import Header from './header';
import Nav from './nav';
import Home from './home';
import Newpost from './newpost';
import Editpost from './editpost';
import PostPage from './postpage';
import About from './about';
import Missing from './missing';
import Footer from './footer';
import { DataProvider } from './context/datacontext';

function App() {
     
  return (
    <div className="App">
      <DataProvider>
          <Header title="Sample Social Media"/>
          <Nav />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="posts">
                <Route index element={<Newpost />}/>
                <Route path=":id" element={<PostPage />} />
              </Route>
              <Route path="/edit/:id" element={<Editpost />} />
              <Route path="about" element={<About />}/>
              <Route path="*" element={<Missing />}/>
          </Routes> 
      </DataProvider>
      <Footer />  
    </div>
  );
}

export default App;
