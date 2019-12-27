import React, { useRef, useContext } from 'react'
import {Container} from "./style";
import Label from "../Label";
import {useDrop, useDrag} from "react-dnd";

import BoardContext from '../Board/context';
export default function Card({card,index,listIndex}){
    const ref = useRef();
    const {move} = useContext(BoardContext);

    const[{isDragging},dragRef] = useDrag({
        item: {type:'CARD',index, id:card.id, listIndex},
        collect: monitor =>({
            isDragging: monitor.isDragging()
        })
    })    

    const [,dropRef] = useDrop({
        accept:'CARD',
        hover(item,monitor){

            const draggedistIndex = item.listIndex;
            const targetListIndex = listIndex;
            const draggableIndex = item.index;
            const targetIndex = index;

            if(draggableIndex == targetIndex && draggedistIndex==targetListIndex){
                return;
            }

            const targetPosition = ref.current.getBoundingClientRect();
            const targetHalfHeight = (targetPosition.bottom - targetPosition.top)/2;

            const draggOffset = monitor.getClientOffset();
            const draggTop = draggOffset.y - targetPosition.top;
            
            if(targetIndex < targetIndex && draggTop < targetHalfHeight){
                return;
            } 

            if(targetIndex > targetIndex && draggTop > targetHalfHeight){
                return;
            }

            move(draggedistIndex, targetListIndex, draggableIndex,targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    })

    dragRef(dropRef(ref));
  
    return (           
        <Container ref={ref} isDragging={isDragging}>
            <div>
                <Label color={card.labels}/>
            </div>
            <h3>{card.content}</h3>
            {card.user && <img src={card.user}/> }
            
        </Container>
    )
}
