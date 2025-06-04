import React from 'react'

const VariableConditionalRendering = (props) => {
    const {isLogin} = props
    let Constant;
    if(isLogin){
        Constant = <h1>Welcome to Home Page</h1>
    }else{
        Constant = <h1>Please Login</h1>
    }
  return (
    <div>
      {Constant}
    </div>
  )
}

export default VariableConditionalRendering
