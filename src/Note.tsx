import { Row, Col, Stack, Badge, Button } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export function Note(){
    const note = useNote()
    return <>
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
                        <Button variant="outline-danger">Delete</Button>
                        <Button variant="outline-secondary">Back</Button>
                </Stack>    
            </Col>
        </Row>
        <ReactMarkdown className="px-5">{note.markdown}</ReactMarkdown>
                            
    </>
}