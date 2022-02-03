import React, { useState } from 'react';
import styled from 'styled-components';
import "./Tabs.css"

const Tab = styled.button`
  width:25%;
  max-width:300px;
  padding:1% 4%;
  font-size: 3vmin;
  text-align:center;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-radius:10px;
  margin: 0 5px 0 5px;



  ${({ active }) =>
    active &&
    `
    box-shadow: black 0 0  3px;
    opacity: 1;
    transition: all 0.3s;

  `}
`;
const ButtonGroup = styled.div`
  margin-top:10px;
  width:100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;


`;

function TabGroup(props) {
    const types = props.tabs;
    const contents = props.contents;
    
  const [active, setActive] = useState(types[0]);
  let active_content;
  for(let key in types){
      if(active===types[key])
        active_content = contents[key];
  }
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab key={type} active={active === type} onClick={() => setActive(type)}  >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <div className='content'>{active_content} </div>
    </>
  );
}
export default TabGroup;