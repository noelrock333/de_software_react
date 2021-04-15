import { useState } from 'react';

const TodoList = () => {
  const [names, setNames] = useState()
  
  const handleDelete = (name) => {
    let filteredNames = names.filter(currentName => currentName !== name)
    setNames([...filteredNames])
  }

  const Item = ({ name }) => <li onClick={() => handleDelete(name)}>{name}</li>
  
  return (
    <ul>
      {names.map(name => <Item name={name} />)}
    </ul>
  );
}

export default TodoList;
