

import NoteForm from "./NoteForm"
import { Row, Col } from 'react-bootstrap';
import { NoteData, Tag } from './App';
import { useNote } from './NoteLayout';
import NavbarComponent from "./Navbar";

type EditNoteProps = { 
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & NoteData

export const EditNote = ( { onSubmit, onAddTag, availableTags }: EditNoteProps ) => {

    const note = useNote()
  return (
    <>
    <NavbarComponent />
    <div className="mx-2 mt-5 p-4 border">
      <Row className=''>
        <Col>        
          <h1 className="mb-4">Edit Note</h1>
        </Col>     
      </Row>
      <Row>
        <Col>
          <NoteForm 
          title={note.title}
          markdown={note.markdown}
          tags={note.tags}          
          onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags}/>
        </Col>
      </Row>
    </div>
    
    </>
  )
}
