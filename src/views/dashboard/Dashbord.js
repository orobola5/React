import React from 'react'
import MyEvents from './pages/MyEvents'
import{Routes,Route} from "react-router-dom"
import Container from '../../components/dashboard/Container'
import "./dashboard.css"
const Dashboard=()=>{
    return(
        <div className='dashboardContainer'>
            <Container>
            <Routes>
                <Route path="/" element ={<MyEvents/>}></Route>
            </Routes>
            </Container>

        </div>
    )
}
export default Dashboard