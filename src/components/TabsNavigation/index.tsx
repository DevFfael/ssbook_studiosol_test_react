import { TabItem, TabWrapper } from './style';

const TabsNaviagtion = () => {
  return (
    <TabWrapper>
      <TabItem $active>Meus Livros</TabItem>
      <TabItem>Emprestados</TabItem>
    </TabWrapper>
  );
};

export default TabsNaviagtion;
