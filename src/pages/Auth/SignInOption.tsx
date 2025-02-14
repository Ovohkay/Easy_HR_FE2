import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import LeftSectionImage from "../../Assets/hr_group.jpg"
import { NavLink } from 'react-router-dom'
import OutlineButton from '../../components/Buttons/OutlineButton'
import logo from "../../Assets/logos2.png"
import { log } from 'console'

const SignInOption = () => {

   

  return (

    
    <SignUpOptionPageContainer>
        <LeftSection>
           <NavLink to="/">
           <OutlineButton color='white' border='2px solid white' 
            top='20px'
            left='20px'
            fontSize='200px'
            positioning='absolute'
            />
           </NavLink>
            <Image src={LeftSectionImage}/>
        </LeftSection>
        <RightSection>
            
            <MobileViewBackButton>
            <OutlineButton color=' #0170f6' border='2px solid  #0170f6' top='15%' left='20px' positioning='fixed' fontSize='24px'/>
            </MobileViewBackButton>
            <SignUpOptionField>
                <LogoHold>
                    <Logo src={logo}/>
                </LogoHold>
                <TitleAndDescriptionContainer>
                    <Description>track your company's salary <br /> disbursment with easy</Description>
                </TitleAndDescriptionContainer>
                <OptionButtonContainer>
                    <NavLink to="/sign-in-admin" style={{width:"100%", textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                        <AdminSignUpOption>Sign In As A Company</AdminSignUpOption>

                    </NavLink>

                    <NavLink to="/sign-in"  style={{width:"100%", textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                    <StaffSignUpOption>Sign In As A Staff</StaffSignUpOption>
                    </NavLink>
                </OptionButtonContainer>
            </SignUpOptionField>
        </RightSection>
    </SignUpOptionPageContainer>
  )
}
 
export default SignInOption;



// Rignt Section Codes

const MobileViewBackButton = styled.div`
    height: 50px;
    width: 50px;
    display: none;
    justify-content: center;
    position: absolute;
    top: 15%;
    left: 10px;

    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
    position: absolute;
    }

    
    /* background-color: blue; */

`

const Description = styled.div`
height: 100px;
width: auto;
font-size: 24px;
font-weight: bold;
text-align: center;
color: #0170f6;
margin-top: 20px;
/* background-color: blue; */
`

const Logo = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`
const LogoHold = styled.div`
height: 50px;
width: 150px;
overflow: hidden;
`

const StaffSignUpOption = styled.button`
 height: 70px;
    width: 80%;
    border-radius: 50px;
    color: #07befb;
    font-size: 20px;
    font-weight: 600;
    border: none;
    border: 2px solid #07befb6e;
    margin-top: 50px;
    transition: all 390ms;
    background-color: transparent;


    cursor: pointer;
    :hover{
        transform: scale(1.03);
        background-color: #0077ffd7;
        color: white;

    }

`

const AdminSignUpOption = styled.button`
    height: 70px;
    width: 80%;
    /* background-color: #0791fb6a; */
    background-color: #d01904;
    border-radius: 50px;
    /* color: #078dfb; */
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    transition: all 390ms;
    cursor: pointer;
    :hover{
        transform: scale(1.03);
        background-color: transparent;
        border: 2px solid  #007bffce;
        color:  #078dfb;
    }
`

const OptionButtonContainer = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `


const TitleAndDescriptionContainer = styled.div`
    height: 100px;
    width: 100%;
    text-align: center;
margin-bottom: 40px;
`

const SignUpOptionField = styled.div`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: blue; */
`

const RightSection = styled.div`
height: 100vh;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
position: relative;
/* background-color: blue; */



@media screen and (max-width: 500px) {
    h1{
        font-size: 25px;
    }

    button{
        font-size: 18px;
    }
}
`




// Left Section Codes
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
overflow: hidden;
`

const LeftSection = styled.div`
height: 100vh;
width: 50%;
overflow: hidden;
position: relative;

::before{
    content: "";
    height: 100%;
    width: 100%;
    background-color: rgba(59, 59, 59, 0.483);
    position: absolute;
}

@media screen and (max-width: 960px) {
    display: none;
}
`






// Sign Up Option Container Codes
const SignUpOptionPageContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

