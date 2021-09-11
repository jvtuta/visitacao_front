import { FormLogin } from "../../components/FormLogin"
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from "../../components/Header"

export function Login () {
    return (
        <>
        <Header Login="true"/>
        <Container>
            <Row className="justify-content-center">
                <Col xs={5}>
                    
                    <FormLogin />
                </Col>
            </Row>
        </Container>
        </>
    )
}