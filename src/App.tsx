import React, { useState } from 'react';
import Input from './Components/Input';
function App() {
  const [value, setValue] = useState('');
  
  
  return (
    <Input onChange={(e) => setValue(e.target.value)}/>
  );
}

export default App;
