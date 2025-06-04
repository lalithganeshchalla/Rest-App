import React from 'react'

const TernaryOperatorConditionalRendering = (props) => {
    const {isLogin} = props;
 return(
      isLogin ? <h1>Welcome to Home Page</h1> : <h1>Please Login</h1>
 )
}

export default TernaryOperatorConditionalRendering
