import React, { useState } from 'react';
import Input from './Components/Input';
import Card from './Components/Card';
function App() {
  const [value, setValue] = useState('');
  
  
  return (
    // <Input onChange={(e) => setValue(e.target.value)}/>
    <Card />
  );
}

export default App;
