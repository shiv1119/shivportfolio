import { SkillsCarousel } from "./SkillsCarousel"
import { Row, Col} from "antd"


const Skills = () =>(
    <>
    <Row gutter={[20,10]} id="skills">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className='large_medium_text'>
            <div style={{textAlign:"center"}} className='main_title'>Technical Skills</div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className='small_text' style={{textAlign:"justify", marginTop:"10px", marginBottom:"15px"}}>
                <SkillsCarousel />
            </div>
        </Col>
    </Row>
    <Row gutter={[20,10]} >
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className='large_medium_text'>
            <div style={{textAlign:"center"}} className='main_title'>Soft Skills</div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop:"5px", marginBottom:"15px"}}>
            <div className='small_text' style={{textAlign:"justify", background: "linear-gradient(90deg, rgba(24,24,24,0.1026611328125) 0%, rgba(184,184,184,0.09705889191614148) 14%, rgba(45,45,45,0.1026611328125) 100%)", height:"55px"}}>
                <marquee width="100%" scrollamount="12" behavior="alternate">
                    <div style={{display:"flex", gap:"30px", fontWeight:"bold", paddingRight:"15px", paddingLeft:"15px"}}>
                        <p style={{color:"#4287f5"}}>Time Management</p>
                        <p style={{color:"#42f578"}}>Leadership</p>
                        <p style={{color:"#f5e342"}}>Communication</p>
                        <p style={{color:"#f54242"}}>Teamwork</p>
                        <p style={{color:"#f5a442"}}>Problem Solving</p>
                        <p>Adaptability</p>
                        <p style={{color:"#6ed4eb"}}>Creativity</p>
                        <p style={{color:"#b251fc"}}>Critical Thinking</p>
                        <p style={{color:"#fc51af"}}>Emotional Intelligence</p>
                    </div>
                </marquee>
            </div>
        </Col>
    </Row>
    </>
    )

export default Skills