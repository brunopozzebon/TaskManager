import styled from "styled-components";

export const Container = styled.div`
    width:10px;
    height: 10px;
    border-radius:2px;
    background-color: ${props => props.color};
`;