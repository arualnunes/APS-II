import React from 'react'

const Black = ({ children }) => {
  return (
    <div style={{
      backgroundColor: '#11111f',
      color: '#fffceb',
      textAlign: 'right',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      display: 'flex'
    }}>
      <div style={{
        minWidth: '80vw',
        minHeight: '60vh'
      }}>
        {children}
      </div>
    </div>)
}

export default Black
