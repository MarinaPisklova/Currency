import React from 'react';
import { Navigate } from 'react-router-dom';
import { Converter } from './../pages/Converter/Converter';
import { Currencies } from './../pages/Currencies/Currencies';

export const routes = [
  { path: "*", component: <Navigate replace to="/converter" />, exact: true },
  { path: "/converter", component: <Converter />, exact: true },
  { path: "/currency", component: <Currencies />, exact: true },
]
