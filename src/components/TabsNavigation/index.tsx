import { useState } from 'react';
import { TabItem, TabWrapper } from './style';

const TabsNaviagtion = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <TabWrapper>
      <TabItem $active={tab === 1} onClick={() => setTab(1)}>
        Meus Livros
      </TabItem>
      <TabItem $active={tab === 2} onClick={() => setTab(2)}>
        Emprestados
      </TabItem>
    </TabWrapper>
  );
};

export default TabsNaviagtion;
