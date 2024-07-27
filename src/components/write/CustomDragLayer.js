import React from 'react';
import { useDragLayer } from 'react-dnd';
import styled from 'styled-components';
import moodingNote from "../../lib/images/mooding_note.png";

const DragLayerDiv = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const DraggedNote = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${moodingNote});
  border: none;
  background-color: transparent;
`;

const getItemStyles = (initialOffset, currentOffset) => {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
};

const CustomDragLayer = () => {
  const {
    itemType,
    isDragging,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <DragLayerDiv>
      <div style={getItemStyles(initialOffset, currentOffset)}>
        {itemType === 'NOTE' && <DraggedNote />}
      </div>
    </DragLayerDiv>
  );
};

export default CustomDragLayer;
