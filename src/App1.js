import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
// import Index from './useReducer/index'
// import Users from './useReducer/Users'
import Loading from './APICall/Loading'
import GetAPICall from './APICall/GetAPICall'
import GetAPICall1 from './APICall/GetAPICall1'
import Users from './useReducer/Users'
import Portfolio from './portfolio/Portfolio'

const App1 = () => {
  return (
    <Router>
        <Routes>
            {/* <Route path="/" element={<Index/>} />
            <Route path="/users" element={<Users/>}/> */}
            <Route path="/" element={<Loading/>}/>
            <Route path="/fetchapi" element={<GetAPICall/>}/>
            <Route path="/axiosapi" element={<GetAPICall1/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
    </Router>
  )
}

export default App1