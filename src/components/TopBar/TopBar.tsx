import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'variables/colors';
import { Revealer } from 'variables/animations';

interface IProps {
    tabs: string[]
    switchTab: (tabName: string) => void;
    activePage: string;
    isProjectsFilterVisible: boolean;
}

const c = { ...COLORS };

const StyledTopBar = styled.nav`
    width: 100%;
    position: fixed;
    font-size: 1.5rem;
    height: 8vh;
    z-index: 10000;
    @media (max-width: 768px) {
      box-shadow: 0px 10px 0px -1px ${c.red};
      background-color: ${c.white};
      max-width: 100vw;
    };
    
`;
const StyledTabContainer = styled.ul`
    display: inline-flex;
    list-style: none;
    justify-content: flex-end;
    width: 100%;
    padding: 0;
    margin-left: 0px;
    @media (max-width: 768px) {
      justify-content: center;
    };
`;
const StyledTab = styled.li<{ activePage: string, tab: string, isVisible: boolean;}>`
  color: ${(props) => props.tab === props.activePage ? c.red : (props.isVisible && props.activePage === 'projects') ? c.white : c.black};
  display: inline-block;
  cursor: pointer;
  transition: 0.2s;
  text-transform: capitalize;

  &:hover {
    color: ${ c.pink };
    transition: 0.2s;
  }
  
  &:after {
    content: '';
    display: block;
    width: ${(props) => props.tab === props.activePage ? '100%': '0'};
    height: 2px;
    background-color: ${(props) => props.tab === props.activePage ? c.red : c.pink};
    transition: width .5s;
  }

  &:hover::after {
    width: 100%;
    transition: width .5s;
  }
`;


export const TopBar: React.FC<IProps> = (props: IProps) => {
  const { isProjectsFilterVisible, activePage, switchTab, tabs } = props;

  return (
    <StyledTopBar>
      <StyledTabContainer>
        { tabs.map((tab) => <Revealer
          key={ tab }
          boxColor={ activePage === tab ? c.red : c.black}>
          <StyledTab
            activePage={ activePage }
            isVisible={ isProjectsFilterVisible }
            tab={ tab }
            onClick={ () => { activePage !== tab && switchTab(tab); }}
            key={ tab }>
            { tab } &nbsp;
          </StyledTab>
        </Revealer>) }
      </StyledTabContainer>
    </StyledTopBar>
  );
};
