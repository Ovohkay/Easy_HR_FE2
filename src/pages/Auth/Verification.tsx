import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/easy.png"
import {HiOutlineMail} from "react-icons/hi"

const Verification = () => {
  return (
      <Container>
          <Box>
              <Img src={img} />
              <Card>
                  <Linehold>
                      <Line></Line>
                      <Icons><HiOutlineMail /></Icons>
                      <Line></Line>
                  </Linehold>
                  <Thanks>THANKS FOR SIGNING UP!</Thanks>
                  <Verify><h3>Verify Your E-email Address</h3></Verify>
              </Card>
              <Textspace>
                  <p>Hi,</p>
                  <Texthold>
                      You're almost ready to get started. Please click on the button below to verify your email and enjoy exclusive service with us
                  </Texthold>
              </Textspace>
              <Button>VERIFY YOUR EMAIL</Button>
              <Thank>Thanks <br /> The Company's Team</Thank>
          </Box>
    </Container>
  )
}

export default Verification
const Thank = styled.div`
    display: flex;
    text-align: center;
    margin-top: 25px;
    color: #505050;
`
const Button = styled.button`
    width: 170px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #F76808;
    border-radius: 4px;
    margin-top: 30px;
    cursor: pointer;
    border: none;
    outline: none;
`
const Texthold = styled.div`
    width: 320px;
    text-align: center;
    color: #505050;
`
const Textspace = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        color: #505050;
    }
`
const Verify = styled.div`
    h3{
        color: #fff;
    }
`
const Thanks = styled.div`
    color: #fff;
    font-size: 14px;
`
const Icons = styled.div`
    font-size: 33px;
    margin-left: 10px;
    margin-left: 12px;
    margin-right: 12px;
    color: #fff;
`
const Line = styled.div`
    width: 50px;
    height: 1px;
    background-color: gray;
`
const Linehold = styled.div`
    display: flex;
    align-items: center;
`
const Card = styled.div`
    width: 100%;
    height: 150px;
    background-color: #083797;
    margin-top: 40px;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
`
const Img = styled.img`
    width: 110px;
    margin-top: 10px;
`

const Box = styled.div`
    display: flex;
    width: 450px;
    flex-direction: column;
    background-color: #fff;
    padding-bottom: 17px;
    padding-top: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 15px;
    align-items: center;
`


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d6d6d67f;
    flex-direction: column;
`