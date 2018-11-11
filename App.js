import React from 'react'
import Router from 'react-native-easy-router'
import { Text, View } from 'react-native'
import Login from './components/Login'; 
import Home from './components/Home';
import Signup from './components/Signup';

 
const routes = { Login, Home, Signup }
const App = () => <Router 
routes={routes} 
initialRoute="Login"/>
 
export default App