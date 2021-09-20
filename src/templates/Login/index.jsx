import { FormLogin } from "../../components/FormLogin"
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from "../../components/Header"

export function Login () {
    return (
        <>
        <Header Login="false"/>
        <Container>
            <Row className="justify-content-center">
                <Col sm xs md={6} lg={4}>
                    
                    <FormLogin />
                </Col>
            </Row>
        </Container>
        </>
    )
}