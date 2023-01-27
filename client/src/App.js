import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import ShelterForm from './components/ShelterForm';
import {Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/new" element={<ShelterForm/>}/>
          <Route path="/shelter/:id" element={<Detail/>}/>
          <Route path="/shelter/edit/:id" element={<Update/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
