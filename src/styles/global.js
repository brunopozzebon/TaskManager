import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    *{
        margin:0;
        padding:0;
        outline:none;
        box-sizing:border-box;
    }

    html,body,#root{
        height:100%;
    }

    body{
        font:14px 'Roboto',sans-serif;
        background-color:#ecf1f8;
        color:#333;
    }  
    ul{
        list-style-type:none;
    }
`;