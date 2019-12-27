import React, { Component } from 'react'
import {Container} from "./style";
import Card from "../Card"
import {MdAdd} from "react-icons/md";
export default class List extends Component {
    render() {
        const {title,creatable,cards} = this.props.content;
        const listIndex = this.props.index;
        return (
            <Container>
                <header>
                    <h2>{title}</h2>
                    {creatable &&  <button><MdAdd  size="22" color="#fff"/></button>}
                   
                </header>
                {cards.map((card,index)=>{
                    return (
                    <Card key={card.id} 
                    index={index} 
                    listIndex={listIndex}
                    card={card}/>
                    )
                })}
            </Container>
        )
    }
}
