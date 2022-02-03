import React, { useState } from 'react';
import styled from 'styled-components';
import "./Toggle.css"



function Toggle(props) {
  
  return (
    <div className="toggle-wrapper">
    <div className="toggle transparent">
        <input className='input-toggle' id="transparent" type="checkbox" />
        <label className="toggle-item" htmlFor="transparent"></label>
    </div>
</div>
  );
}
export default Toggle;