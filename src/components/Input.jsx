import React from 'react';
import styled from 'styled-components';

const Input = ({onChange, placeholder}) => {
    return (
        <StyledInput 
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
        />
    )
}

export default Input;

const StyledInput = styled.input`
    background: #4556D0;
    font-size: 16px;
    font-weight: bold;
    border: none;
    outline: none;
    border-bottom: 1px solid #7C80C4;
    color: white;
    ::-webkit-input-placeholder { /* Edge */
        color: white;
        font-weight: bold;
    }

    :-ms-input-placeholder { /* Internet Explorer */
        color: white;
        font-weight: bold;
    }

    ::placeholder {
        color: white;
        font-weight: bold;
    }
`;