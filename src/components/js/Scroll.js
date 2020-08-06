import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', padding: '10px', height: '70vh' }}>
      {props.children}
    </div>
  );
};

export default Scroll;
