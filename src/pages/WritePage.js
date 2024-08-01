import PhoneFrame from '../components/common/PhoneFrame.js'
import Write from '../components/write/Write.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';

const WritePage = () => {
  return (
    <PhoneFrame>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <Write />
      </DndProvider>
    </PhoneFrame>
  );
};

export default WritePage;
