// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'
import PropTypes from 'prop-types';

function App() {
  return (
    <div>
      <Box size='small' backgroundColor='lightblue'/>
      <Box size='medium' backgroundColor='pink'/>
      <Box size='large' backgroundColor='orange'/>
    </div>
  )
}

function Box({size, backgroundColor}) {
  return (
    <div className={`box box--${size}`}>{size} {backgroundColor} box</div>
  )
}

Box.propTypes = {
  size: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired
}


export default App
