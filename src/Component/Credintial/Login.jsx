import React from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components'

const Login = () => {
  const Section=styled.section`
    .main{
      background-color: rgb(253,234,241);
    }
    .card{
      background-color: white;
    }
    input{
      height: 50px;
      padding: 10px;
      border: 1px solid grey;
      margin-top: 5px;
      width: 350px;
      margin-left: 50px;
    }
    button{
      border: 1px solid pink;
      background-color: #9e2088;
      width: 400px;
      height: 40px;
      display: block;
      text-align: center;
      margin-left: 25px;
    }
 
  `
  return (
    <React.Fragment>
      <Section >
      <div className="main flex justify-center">
          <div className="card h-[750px] w-[500px]  ">
              <div className="card-head h-[278px] ">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
              </div>
              <div className="forms pt-[50px] mx-[10px]">
                <p className='text-[22px] font-bold mx-[30px]'>Sign Up to view your profile</p>
                <div className="inputs my-8">
                  
                  <input type="text" placeholder='Email' /><br />
                
                  <input type="password" placeholder='Password' /><br />
                  
                  
                </div>
                <button>Submit</button>
              </div>
          </div>
      </div>
      </Section>
    </React.Fragment>
  )
}

export default Login
