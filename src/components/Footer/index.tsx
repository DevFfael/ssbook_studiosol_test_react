import { FooterContainer, Text } from './style';
import LightLogo from '../../assets/lightLogo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <img src={LightLogo} alt="Logo SSBOOK" />
      <Text>Todos os direitos reservados. Studio Sol Books © 2023</Text>
    </FooterContainer>
  );
};

export default Footer;
