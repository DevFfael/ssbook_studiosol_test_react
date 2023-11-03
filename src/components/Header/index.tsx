import Logo from '../../assets/logo.svg';
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
import { GET_USER_PHOTO } from '../../api';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import TabsNaviagtion from '../TabsNavigation';

const Header = () => {
  const { data } = useQuery(GET_USER_PHOTO);

  return (
    <HeaderContainer>
      <HeaderFlexArea>
        <Link to={'/'}>
          <img src={Logo} alt="" />
        </Link>

        <SearchInputContainer>
          <TextField
            variant="outlined"
            label="Buscar"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <MdSearch style={{ fontSize: 24, color: '#555' }} />
              ),
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
            alt="User photo"
            src={data && data.userPicture}
            sx={{ width: 32, height: 32 }}
          />
          <UserName>Raffael Oliveira</UserName>
        </UserInfo>
      </HeaderFlexArea>
      <TabsArea>
        <TabsNaviagtion />
      </TabsArea>
    </HeaderContainer>
  );
};

export default Header;
