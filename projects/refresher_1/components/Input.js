import React from 'react';

const Input = ({ value, onChangeInput, children }) => (
    <label>
      {children}
      <input type="text" value={value} onChange={onChangeInput} />
    </label>
  );

  export default Input