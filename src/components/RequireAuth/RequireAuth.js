import React from 'react';

import { Navigate, Route } from 'react-router-dom';
import getLoad_loggedIn from '../App/App';
export default function RequireAuth({loggedIn, children}) {
  
  return loggedIn ? children : <Navigate to="/signin" />
}