import React from "react";

function TextInput(props) {

  const styles = {
    labelStyle: {
      fontSize: '1rem'
    },
    searchBarStyle: {
      width: '20rem',
      boxSizing: 'border-box',
      border: '0.2rem solid #CCCCCC',
      borderRadius: '8rem',
      fontSize: '1rem',
      backgroundColor: '#E5EEF0',
      padding: '0.5rem 1rem 0.5rem 1rem',
      marginBottom: '2rem'
    }
  }

  return (
    <input
        style={styles.searchBarStyle}
        name={props.name}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
    />
  );
}

export default TextInput;