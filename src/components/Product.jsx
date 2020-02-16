import React from 'react';
import styled from 'styled-components';

const Product = ({name, desc, style, delTime, price}) => {
    return (
        <StyledProduct>
            <div className="flex sb">
                <p className="bold f-16 black">{name}</p>
                <p className="bold f-12 orange">{price} (IDR)</p>
            </div>
            <p className="f-12 black">{desc.length>114? desc.substring(0,111)+"..." : desc}</p>
            <p className="f-12 blue">{style.map((s,i)=>{return i === style.length-1? s : s + ", " })}</p>
            <p className="bold underlined f-14 blue flex end">{delTime} Day</p>
            
        </StyledProduct>
    )
}

export default Product;

const StyledProduct = styled.div`
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    .flex {
        display: flex;
        align-items: center;
        &.sb {
            justify-content: space-between;
        }
        &.end {
            justify-content: flex-end;
        }
    }
`;