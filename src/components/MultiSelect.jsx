import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const MultiSelect = ({title, choices, onChange}) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <StyledMultiSelect>
            <button 
            onClick={()=> setIsHidden(!isHidden)}
            className={!isHidden ? "active" : ""}>
                {isHidden && <span className="arrow"></span>}
                {title}
            </button>
            {!isHidden &&
                <StyledOptions>
                    {choices.map( (c, i) => (
                        <Checkbox
                            key={i}
                            name={c.name}
                            isChecked={c.isChecked}
                            onChange={(e)=>onChange(e)}
                        />
                    ))}
                </StyledOptions>
            }
        </StyledMultiSelect>
    )
}

export default MultiSelect;

const StyledMultiSelect = styled.div`
    position: relative;
    button {
        width: 100%;
        padding: 10px;
        padding-left: 10px;
        text-align: start;
        position: relative;
        background: white;
        outline: none;
        border: none;
        .arrow {
            display: block;
            position: absolute;
            right: 10px;
            top: 15px;
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid black;
        }
        &.active {
            color: #AAA9A9;
        }
    }
`;

const StyledOptions = styled.div`
    position: absolute;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    max-height: 172px;
    overflow-y: scroll;
    border: 1px solid #e3e3e3;
    background: white;
`;
