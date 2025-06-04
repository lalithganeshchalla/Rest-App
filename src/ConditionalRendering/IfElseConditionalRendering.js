import React from 'react'

const IfElseConditionalRendering = (props) => {
    const {isLogin} = props;
  if(isLogin){
    return(
      <div>
        <h1>Welcome to Home Page</h1>
        <p>User is login</p>
      </div>
    );
  }else{
    return( 
      <div>
        <h1>Please Login</h1>
        <p>User is not login</p>
      </div>
    );
  }
}
export default IfElseConditionalRendering
