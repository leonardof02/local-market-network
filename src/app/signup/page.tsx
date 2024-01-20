import React from 'react'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import Box from '@mui/material/Box'

export default function SignUpPage() {
  return (
    <Box display={"flex"} width={"full"} justifyContent={"center"} alignItems={"center"} marginTop={"40px"}>
        <SignUpForm />
    </Box>  
  )
}
