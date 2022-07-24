import React from 'react';
import { ApolloProvider } from '@apollo/client'
import { client } from './services/ApolloClient'
import './App.css';
import GlobalStyle from "./styles/global"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

// pages
import DashboardApp from "./components/DashboardApp";
import Dashboard from "./pages/Dashboard"
import DetailFriends from "./components/DetailFriends/index";
import Navbar from "./components/Navbar/index"

function App() {
    const [updateData, setUpdateData] = React.useState('');

    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Router>
                <Navbar setUpdateData={setUpdateData} />
                <Routes>
                    <Route path='/friends/:name' element={<DetailFriends />}></Route>
                    <Route path='/dashboard' element={<DashboardApp setUpdateData={setUpdateData} search={updateData} />}></Route>
                    <Route path='/' element={<Dashboard setUpdateData={setUpdateData} search={updateData} />}></Route>
                </Routes>
            </Router>
        </ApolloProvider>
    )
}

export default App;