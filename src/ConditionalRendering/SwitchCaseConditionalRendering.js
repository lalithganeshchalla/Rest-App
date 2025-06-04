import React from 'react'

const SwitchCaseConditionalRendering = (props) => {
  const { status } = props; // success, error,loading, warning
    switch (status) {
    case 'success':
      return <h1>Success</h1>
    case 'error':
      return <h1>Error</h1>
    case 'warning':
      return <h1>Warning</h1>
    default:
      return <h1>Loading</h1>
  }
}


export default SwitchCaseConditionalRendering
