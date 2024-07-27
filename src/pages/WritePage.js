import PhoneFrame from '../components/common/PhoneFrame.js'
import Write from '../components/write/Write.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const WritePage = () => {
  return (
      <PhoneFrame>
        <DndProvider backend={HTML5Backend}>
          <Write/>
        </DndProvider>
      </PhoneFrame>
  );
};

export default WritePage;
