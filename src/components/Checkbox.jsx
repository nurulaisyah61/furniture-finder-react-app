import React from 'react';
import styled from 'styled-components';

const Checkbox = ({name, isChecked, onChange}) => {
    return (
        <StyledCheckbox>
            <div>{name}</div>
            <label className="checkbox-label">
                <input 
                    type="checkbox" 
                    name={name} 
                    checked={isChecked} 
                    onChange={(e) => onChange({
                        name: e.target.name,
                        isChecked: e.target.checked
                    })}
                />
                <span className="checkbox-custom rectangular"></span>
            </label>
            
        </StyledCheckbox>
    )
}

export default Checkbox;

const StyledCheckbox = styled.div`
    position: relative;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 14px;
    .checkbox-label {
        display: block;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        line-height: 14px;
        height: 14px;
        width: 14px;
        clear: both;
    }

    .checkbox-label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkbox-label .checkbox-custom {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 14px;
        width: 14px;
        background-color: transparent;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        border: 1px solid black;
    }


    .checkbox-label input:checked ~ .checkbox-custom {
        background-color: #009D8B;
        border-radius: 5px;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity:1;
        border: 1px solid #009D8B;
    }


    .checkbox-label .checkbox-custom::after {
        position: absolute;
        content: "";
        left: 14px;
        top: 14px;
        height: 0px;
        width: 0px;
        border-radius: 5px;
        border: solid #009BFF;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(0deg) scale(0);
        -ms-transform: rotate(0deg) scale(0);
        transform: rotate(0deg) scale(0);
        opacity:1;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
    }


    .checkbox-label input:checked ~ .checkbox-custom::after {
    -webkit-transform: rotate(45deg) scale(1);
    -ms-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity:1;
    left: 5px;
    top: 2px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 2px 2px 0;
    background-color: transparent;
    border-radius: 0;
    }
`;
