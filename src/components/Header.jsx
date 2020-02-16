import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import { AppContext } from '../App';
import MultiSelect from './MultiSelect';

const Header = () => {
    return (
        <AppContext.Consumer>
            { ({filterByName, fStyles, filterByFurnitureStyles, 
                deliveryTimes, filterByDeliveryTimes}) => (
                <StyledHeader>
                    <Input
                        onChange={(text) => filterByName(text)} 
                        placeholder="Search Furniture"
                    />
                    <StyledFilter>
                        <MultiSelect 
                            title="Furniture Styles"
                            choices={fStyles}
                            onChange={(style) => filterByFurnitureStyles(style)}
                        />
                        <MultiSelect 
                            title="Delivery Time"
                            choices={deliveryTimes}
                            onChange={(time) => filterByDeliveryTimes(time)}
                        />
                    </StyledFilter>
                    
                </StyledHeader>
            )}
        </AppContext.Consumer>
    )
}

export default Header;

const StyledHeader = styled.div`
    position: relative;
    background: #4556D0;
    padding: 20px;
`;

const StyledFilter = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

