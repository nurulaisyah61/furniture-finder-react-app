import React from 'react';
import { AppContext } from '../App';
import Product from './Product';
import styled from 'styled-components';

const ProductList = () => {
    return (
        <AppContext.Consumer>
            { ({showedFurnitures}) => (
                <StyledProductList>
                    {showedFurnitures.map((product, i) => {
                    return (<Product
                        key={i} 
                        name={product.name}
                        desc={product.description}
                        style={product.furniture_style}
                        delTime={product.delivery_time}
                        price={product.price}
                     />)
                })}
                </StyledProductList>
            )}
        </AppContext.Consumer>
    )
}

export default ProductList;

const StyledProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 20px;
    @media (max-width:425px) {
        grid-template-columns: 1fr;
    }
`;