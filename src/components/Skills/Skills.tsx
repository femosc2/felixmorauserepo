import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from 'variables/colors';
import { slideToLeft, slideToRight } from 'variables/animations';
import LoaderContainer from 'components/Loader';
import { Revealer } from 'variables/animations';

interface IProps {
  activePage: string;
  skills: any[];
}


export const Skills: React.FC<IProps> = (props) => {
  const c = { ...COLORS };
  const { skills } = props;

  const StyledSection = styled.section`
        background-color: ${c.white};
        background-size: cover;
        color: ${c.black};
        position: absolute;
        height: 100vh;
        animation: ${props.activePage !== 'skills' ? css`${slideToLeft} 1s` : css`${slideToRight} 1s` }
        animation-fill-mode: forwards;
        width: 100%;
        margin: 0;
        padding: 0;
        transition: all 1s ease-in-out;
        z-index: 100;
        @media (max-width: 768px) {
            height: 200vh;
            text-align: center;
        };
    `;

  const StyledBarFill = styled.div<{ width: string, color: string, text: string}>`
  height: 20px;
  padding: 50px;
  width: ${(props) => props.width};
  background-color: ${c.red};
  transition: 0.5s;
  font-size: 30px;

  &:hover {
    background-color: ${(props) => props.color};
    transition: 0.5s;
    height: 50px;
    line-height: 20px;

    &::after {
      content: '${(props) => props.text}';
      font-size: 18px;
    }
  }
  `;

  const StyledSkill = styled.div`
  width: 50%;
  background: ${c.transparentBlack};
  margin-top: 1%;
  text-align: left;
  min-height: 50px;
  color: ${ c.white };
  `;

  const StyledSkillList = styled.section`
  overflow: scroll;
  height: 100vh;
  `;

  const StyledTextSection = styled.section`
  float: right;
  color: red;
  width: 45%;
  margin-top: -90vh;
  margin-right: 50px;
  `;

  const StyledH2 = styled.h2`
    font-size: 5rem;
    color: ${c.red};
    margin: 0 auto;
    text-align: left;
    font-weight: 100;
  `;

  const StyledSpan = styled.span`
    color: ${c.red};
    `;
    
  const StyledP = styled.p`
    color: ${c.black};
    font-size: 2rem;
    text-align: left;
    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        max-width: 100%;
    };
    `;


  return (
    <StyledSection>
      <StyledSkillList>
        {skills.length === 0 ? <LoaderContainer /> :
          skills.map((skill) =>
            <StyledSkill key={ skill.name }>
              <Revealer boxColor={ c.red }>
                <StyledBarFill color={ skill.color } width={ `${skill.comfortability  }%`} text={ skill.description }>
                  {skill.skillName}
                  <br />
                </StyledBarFill>
              </Revealer>
            </StyledSkill>,
          )
        }
      </StyledSkillList>
      {skills.length === 0 ? <LoaderContainer /> :
        <StyledTextSection className="paragraphText">
          <Revealer boxColor={ c.red }><StyledH2>what can i do?</StyledH2></Revealer>
          <Revealer boxColor={ c.black }>
            <StyledP>I'm a <StyledSpan>Computer Science</StyledSpan> student at the <StyledSpan>Information Architecture</StyledSpan> programme
            at Malmö University and a <StyledSpan>Fullstack Web Developer</StyledSpan> at HiQ.
            This means that in addition to my programming skills I also have a good grasp on UX-Design
            and some proficiency in graphic design.</StyledP>
          </Revealer>
        </StyledTextSection> }
    </StyledSection>
  );
};
