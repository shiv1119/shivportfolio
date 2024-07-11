"use client"
import { Col, Row, Image } from 'antd';
import { motion } from 'framer-motion';


const About = () =>(
<Row gutter={[20,10]} id='about'>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} className='large_medium_text'>
        <div className='main_title' style={{textAlign:"center"}}>About Me</div>
    </Col>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className='small_text' style={{textAlign:"justify", marginBottom:"10px"}}>
            As a software engineer proficient in Next.js, Django, REST framework, Python, Java, and C++, I specialize in designing, developing, 
            and maintaining robust and scalable web applications. With a solid foundation in both frontend and backend technologies, I leverage Next.js for 
            efficient frontend development, ensuring responsive and interactive user interfaces. On the backend, I utilize Django and REST framework to build 
            secure and efficient APIs, integrating seamlessly with frontend components. My proficiency in Python, Java, and C++ allows me to implement complex 
            algorithms and optimize application performance. I am committed to delivering high-quality software solutions that meet client requirements and exceed
            expectations
        </div>
    </Col>
</Row>
)



export default About
