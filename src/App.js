import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import Filter from './components/Filter';
import Checklist from './components/Checklist';
=======

import Header from './components/Header.jsx';
import QuakeTracker from './QuakeTracker.js';
import QuakeList from './components/QuakeList.js';
import Home from './Home.js'
>>>>>>> 25b7a1ba68942a22a7b9faa467ee4d80ac2a8ed5


{/*<!---------------------------- Start of  DONT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -------------------------------------------------------------------------------------->*/ }
class App extends Component {

render() {
    return (
<<<<<<< HEAD
      <div>
        <Header />
        <Checklist />
        {/*<Filter fetchFilterData={this.fetchDataFromFilterJsx} />
        <div className="map__section">
          {mapSection}
    </div>*/}
      </div>
=======
        <>
            <BrowserRouter>  
                

                <Routes>
                    <Route path="/">                     
                        <Route index element={<Home />} />  
                        <Route path="/quake-tracker" element={<QuakeTracker />} />
                        <Route path="/quake-index" element={<QuakeList />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <div>
                <Header />
                

            
            </div>
        </>
>>>>>>> 25b7a1ba68942a22a7b9faa467ee4d80ac2a8ed5
    )
}
}

export default App;


