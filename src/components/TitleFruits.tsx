import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function TitleFruits() {
    return (
        <Container>
            <Row>
            <Col xs={12} className='text-center'>
                <h1 className='titlefruits--title'>Season fruits</h1>
            </Col>
            <Col xs={12} className='text-center'>
                <h2 className='titlefruits--subtitle'>the most wonderful fruits</h2>
            </Col>
            </Row>
        </Container>
    );
}

export default TitleFruits