import React from "react";

function H2Heading(props) {

  const H2HeadingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  }
  
  return (
    <p 
      style={H2HeadingStyle}
    >
      {props.textContent}    
    </p>
  );
}

export default H2Heading;
