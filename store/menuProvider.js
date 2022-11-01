import React, {useState} from 'react';
import MenuContext from './menuContext';

const MenuProvider = props => {
  const [total, setTotal] = useState({});
  return (
    <MenuContext.Provider
      value={{
        total,
        setTotal,
      }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
