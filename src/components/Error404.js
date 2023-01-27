import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
const Error404 = () => {
  return (
    <div>
      <h1> Page Not Found</h1>
      <Link to="/" > <Button> Go Home </Button></Link>
    </div>
  )
}

export default Error404
