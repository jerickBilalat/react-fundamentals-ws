// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [ errMsg, setErrMsg ] = React.useState(null)
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  
  function onSubmitHandler(e) {
    e.preventDefault()
    const targetFormField = e.target.elements.usernameInput.value
    onSubmitUsername(inputRef.current.value)
  }
  
  function onChange(e) {
     const value = e.target.value
     if(!isValid(value)) return setErrMsg('Username must be all lowercase')
     setErrMsg(null)
  }

  function isValid(input) {
    return input === input.toLowerCase()
  }

  return (
    <form onSubmit={ e => onSubmitHandler(e)}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" ref={inputRef} onChange={ e => onChange(e) }id="usernameInput" />
        <p style={{color: "red"}}>{errMsg}</p>
      </div>
      <button disabled={errMsg ? true : false} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
