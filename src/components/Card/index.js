import React, { useRef, useContext } from 'react'
import { Container, LastCardContainer } from "./style";
import Label from "../Label";
import { useDrop, useDrag } from "react-dnd";

import BoardContext from '../Board/context';

export default function Card({ card, index, listIndex }) {

    const ref = useRef();
    const { move } = useContext(BoardContext);


    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index, id: card.id, listIndex },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {

            const draggedistIndex = item.listIndex;
            const targetListIndex = listIndex;
            const draggableIndex = item.index;
            let targetIndex = index;

            if (draggableIndex == targetIndex && draggedistIndex == targetListIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggOffset = monitor.getClientOffset();
            const draggTop = draggOffset.y - targetSize.top;

            if (draggableIndex < targetIndex && draggTop < targetCenter) {
                return;
            }

            if (draggableIndex > targetIndex && draggTop > targetCenter) {
                return;
            }

            if (card.id == -1 && draggTop > targetCenter) {
                return;
            }
            if (card.id == -1) {
                targetIndex = 0;
            }

            move(draggedistIndex, targetListIndex, draggableIndex, targetIndex);
            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    })

    if (card.id >= 0) {
        dragRef(dropRef(ref));
        return (
            <Container ref={ref} isDragging={isDragging}>
                <div>
                    <Label color={card.labels} />
                </div>
                <h3>{card.content}</h3>
                {card.user && <img src={card.user} />}
            </Container>
        )
    } else {
        dropRef(ref);
        return (
            <LastCardContainer ref={ref}>
                <p>Arraste suas tarefas aqui</p>
            </LastCardContainer>
        )
    }
}
