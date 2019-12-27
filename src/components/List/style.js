import styled from "styled-components";

export const Container = styled.div`
    padding:0 20px;
    min-height:100%;
    & + div{
        border-left: 1px solid #aaa8;
    }

    header{
        height:50px;
        padding-bottom:15px;
        justify-content:space-between;
        display:flex;

        h2{
            align-self:center;
            font-size:16px;
            font-weight:700;
        }
        button{
            cursor:pointer;
            width:35px;
            height: 35px;
            background-color:rgb(104,79,188);
            color:white;
            border-radius:10px;
            border:none;
        }
    }
`;