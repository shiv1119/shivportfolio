import {Row, Col, Card} from "antd";


const Certificates = () =>{
    return(
        <>
            <Row>
                <Col> <span style={{textAlign:"center"}} class="large_medium_text main_title">Certificates</span>
                </Col>
            </Row>
            <Row gutter={30}>
                <Col xs={24} md={24} lg={12} xl={12} xxl={12}> 
                <Card title="Certificate 1"></Card>
                </Col>
                <Col xs={24} md={24} lg={12} xl={12} xxl={12}> 
                <Card title="Certtificates 2"></Card>
                </Col>
            </Row>
        </>
    );
}


export default Certificates;