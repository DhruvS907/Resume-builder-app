import React, { Suspense } from 'react';
import {Route,Routes} from "react-router-dom"
import { HomeScreen } from '../pages/HomeScreen';
import { Authentication } from '../pages/Authentication';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/auth" element={<Authentication/>}/>
      </Routes>
    </Suspense>
  )
}
