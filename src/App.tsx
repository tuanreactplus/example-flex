import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./app/pages/home";
import {Docs} from "./app/pages/docs";
import {Galleries} from "./app/pages/galleries";
import {Layout} from "./app/components/modules/Layout";
import {Footer} from "./app/components/elements/Footer";



function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path="docs" element={<Docs />} />
              <Route path="galleries" element={<Galleries />} />
            </Route>
          </Routes>
            <Footer />
        </BrowserRouter>
  );
}

export default App;
