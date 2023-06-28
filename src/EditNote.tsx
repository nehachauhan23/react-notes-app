
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NoteForm from "./NoteForm"
import { Row, Col } from 'react-bootstrap';
import { NoteData, Tag } from './App';
import { useNote } from './NoteLayout';


type EditNoteProps = { 
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & NoteData

export const EditNote = ( { onSubmit, onAddTag, availableTags }: EditNoteProps ) => {

    const note = useNote()
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Notes App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Add New Note </Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
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
