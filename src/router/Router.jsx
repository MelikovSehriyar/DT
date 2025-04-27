import React from 'react';

import Collection from '../pages/Collection';
import Shop from '../pages/Shop';
import Catalogs from '../pages/Catalogs';
import Contact from '../pages/Contact';
import Layout from '../layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/collection' element={<Collection />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/catalogs' element={<Catalogs />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
