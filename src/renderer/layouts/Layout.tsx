import * as React from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

const LoginLink = () => <Link to="/login" />

export default function Layout() {
  return (
    <div>
      <Button component={LoginLink} variant="contained" color="primary">
        Login
      </Button>
    </div>
  )
}
