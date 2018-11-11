import React from 'react'
import Router from 'react-native-easy-router'
import Login from './components/Login'; 
import Home from './components/Home';
import Signup from './components/Signup';
import Search from './components/Search';
import {BackAndroid} from 'react-native';


const routes = { Login, Home, Signup, Search }
const App = () => <Router 
routes={routes} 
initialRoute="Login"
disableHardwareBack={false}/>
 
export default App