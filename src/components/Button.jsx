import React from 'react'
import styled from 'styled-components';

export default function Button(props) {
    const {label, styleClass, onClick, disabled} = props;
    return (
        <StyButton className={styleClass} onClick={onClick} disabled={disabled}>{label}</StyButton>
    )
}


const StyButton = styled.button`
  background-color: #FFE4E1;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
  cursor: pointer;
  color: var(--button-color, #221e1e);
  font-size: var(--button-font-size, 1rem);
  &:hover
  {
    background: var(--button-hover-bg-color, lightgreen);
  }
`;