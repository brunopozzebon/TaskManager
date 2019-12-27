import styled, {css} from "styled-components";


export const Container = styled.div`
    width:250px;
    padding: 0 10px 10px 10px;
    background-color:white;
    border-radius:8px;
    box-shadow: 0 2px 4px #aaa8;
    margin-bottom:10px;
    border-top:15px solid #F7F5FD;
    cursor:grab;
    
    div > div{
      transform:translateY(-50%);
    }

    img{
        width:24px;
        height:24px;
        border-radius:5px;
    }

    h3{
        font-size:14px;
        margin-top:4px;
        margin-bottom:10px;
        font-weight:500;
    }

    ${props => props.isDragging && css`
        border: 2px dashed #0004;
        padding-top:11px;
        border-radius:0;
        background:transparent;
        cursor:cursor: grabbing;
        h3,img,div{
            opacity:0;
        }

    `}
`;