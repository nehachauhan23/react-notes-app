
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NoteForm from "./NoteForm"
import { Row, Col } from 'react-bootstrap';
import { NoteData, Tag } from './App';
import NavbarComponent from './Navbar';

type NewNoteProps = { 
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

export const NewNote = ( { onSubmit, onAddTag, availableTags }: NewNoteProps ) => {
  return (
    <>
   <NavbarComponent />
    <div className="mx-2 mt-5 p-4 border">
      <Row className=''>
        <Col>        
          <h1 className="mb-4">Add New Note</h1>
        </Col>     
      </Row>
      <Row>
        <Col>
          <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
        </Col>
      </Row>
    </div>
    
    </>
  )
}
