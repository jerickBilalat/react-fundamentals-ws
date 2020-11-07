// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className="box" >small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>
const Box = ({className, style, children, size}) => {
  return <div className={`box--${size}`} style={{fontStyle: 'italic', ...style}}>{children}</div>
}


function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box>
<Box size="medium" style={{backgroundColor: 'red'}}>
  small lightblue box
</Box>
<Box size="large" style={{backgroundColor: 'yellow'}}>
  small lightblue box
</Box>
    </div>
  )
}

export default App
