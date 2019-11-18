import React from 'react'

const Image = ({ src, width }) => {
  return (<img src={src} style={{
    width,
    margin: '0 auto',
    display: 'block'
  }} />);
}

export default Image
