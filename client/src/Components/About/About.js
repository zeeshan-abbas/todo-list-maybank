import {withHeaderMenu} from "../../Behavior";
import {Container, Col, Row} from "react-bootstrap";

function About() {
    return (
        <Container className={"mt-4"}>
            <Row className="mt-4">
                <Col><h1>About</h1></Col>
            </Row>
            <Row className="mt-4">
                <h3>Hi, I'm Zeeshan.</h3>
                <p>I'm a full-stack engineer with ample experience in web application
                    development.</p>
            </Row>
        </Container>
    );
}

export default withHeaderMenu(About);
