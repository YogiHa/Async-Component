import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowX:'hidden', overflowY: 'scroll',dispaly:'none', height: '80%'}}>
      {props.children}
    </div>
  );
};

export default Scroll;