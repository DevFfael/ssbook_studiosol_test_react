import Logo from '../../assets/logo.svg';
import PerfilPhoto from '../../assets/avatar.png';
import {
  HeaderFlexArea,
  HeaderContainer,
  TabsArea,
  UserInfo,
  ActionContainer,
  ActionCard,
  TextCard,
  SearchInputContainer,
  UserName,
} from './style';
import { Avatar, TextField } from '@mui/material';
import { MdAddCircle, MdFavorite, MdSearch } from 'react-icons/md';
import TabsNaviagtion from '../TabsNavigation';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderFlexArea>
        <img src={Logo} alt="" />

        <SearchInputContainer>
          <TextField
            variant="outlined"
            label="Buscar"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: <MdSearch style={{ fontSize: 24 }} />,
            }}
          />
        </SearchInputContainer>

        <ActionContainer>
          <ActionCard>
            <MdAddCircle />
            <TextCard>Adicionar</TextCard>
          </ActionCard>
          <ActionCard>
            <MdFavorite />
            <TextCard>Favoritos</TextCard>
          </ActionCard>
        </ActionContainer>

        <UserInfo>
          <Avatar
            alt="Perfil usuário"
            src={PerfilPhoto}
            sx={{ width: 32, height: 32 }}
          />
          <UserName>Lara Meneses</UserName>
        </UserInfo>
      </HeaderFlexArea>
      <TabsArea>
        <TabsNaviagtion />
      </TabsArea>
    </HeaderContainer>
  );
};

export default Header;
