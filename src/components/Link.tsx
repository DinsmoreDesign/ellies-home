import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
    display: block;
    padding: 2rem;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    transition: all 0.5s ease-in-out;

    :hover {
        background-color: #fff;
        color: #9b4dca;
    }
`;
