import * as React from "react"
import { Redirect } from "react-router-dom"

interface AuthProps {
  children: JSX.Element
}

const Auth = ({ children }: AuthProps) => {
  if (false) {
    return children
  } else {
    return <Redirect to="/login" />
  }
}

export default Auth
