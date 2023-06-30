import { Row, Col, Stack, Badge, Button } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NavbarComponent from "./Navbar";
type NoteProps = {
    onDelete: (id: string) => void
}
export function Note({ onDelete }: NoteProps){ 
    const note = useNote()
    const navigate = useNavigate()
    
    return <>
        <NavbarComponent />
        <Row className="p-5 align-items-center mb-4">
            <Col>
                    <span className="fs-5">
                        {note.title}
                    </span>
                    {note.tags.length > 0 && (
                    <Stack gap={1} direction="horizontal" className="flex-wrap">
                        {note.tags.map(tag => (
                            <Badge key={tag.id} className="text-truncate">{tag.label}</Badge>
                        ))}
                    </Stack>)}
            </Col>
            <Col xs="auto">
                <Stack gap={2} direction="horizontal">
                    <Link to={`/${note.id}/edit`}>
                        <Button variant="primary">Edit</Button>
                    </Link>
                        <Button 
                        onClick={() => {
                            onDelete(note.id)
                            navigate("/")
                        }}
                        variant="outline-danger">
                        Delete</Button>
                    <Link to="/">
                        <Button variant="outline-secondary">Back</Button>
                    </Link>
                </Stack>    
            </Col>
        </Row>
        <ReactMarkdown className="px-5">{note.markdown}</ReactMarkdown>
                            
    </>
}