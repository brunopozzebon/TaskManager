import React, { Component } from 'react'
import {Container} from "./style";

export default class Label extends Component {
    render() {
        const label = this.props.color;
        const color = label!=null ? label[0] : "transparent";
        return (
            <Container color={color}>
                
            </Container>
        )
    }
}
