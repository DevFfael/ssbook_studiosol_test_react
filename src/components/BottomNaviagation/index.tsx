import React from 'react';
import { NavigationButton, NavigationContainer } from './style';
import {
  MdHomeFilled,
  MdFavorite,
  MdSearch,
  MdAddCircle,
} from 'react-icons/md';

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <NavigationButton $active to="/">
        <MdHomeFilled />
        Início
      </NavigationButton>
      <NavigationButton to="/adicionar">
        <MdAddCircle />
        Adicionar
      </NavigationButton>
      <NavigationButton to="/buscar">
        <MdSearch />
        Buscar
      </NavigationButton>
      <NavigationButton to="/favoritos">
        <MdFavorite />
        Favoritos
      </NavigationButton>
    </NavigationContainer>
  );
};

export default BottomNavigation;
