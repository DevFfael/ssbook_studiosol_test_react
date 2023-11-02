import { HeaderFlexArea, HeaderContainer, TabsArea } from './style';
import Logo from '../../assets/logo.svg';
import PerfilPhoto from '../../assets/avatar.png';
import { Avatar } from '@mui/material';
import TabsNaviagtion from '../TabsNavigation';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderFlexArea>
        <img src={Logo} alt="" />
        <Avatar
          alt="Perfil usuário"
          src={PerfilPhoto}
          sx={{ width: 32, height: 32 }}
        />
      </HeaderFlexArea>
      <TabsArea>
        <TabsNaviagtion />
      </TabsArea>
    </HeaderContainer>
  );
};

export default Header;
