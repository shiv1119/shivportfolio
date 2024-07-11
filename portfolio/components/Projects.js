"use client";
import { Image,Card, Row, Col } from "antd"
import CardComponent from "./ProjectCard";

const Projects = () =>{
    const cardDetails = [
        {
            id: 0,
            imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            title: 'Blogging Website',
            liveLink: 'https://live-link.com',
            githubLink: 'https://github.com/link',
            description: [
                "I'm description 1",
                "I'm description 2",
                "I'm description 3",
                "I'm description 4",
            ],
        },
        {
            id: 1,
            imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            title: 'Blogging Website',
            liveLink: 'https://live-link.com',
            githubLink: 'https://github.com/link',
            description: [
                "I'm description 1",
                "I'm description 2",
                "I'm description 3",
                "I'm description 4",
            ],
        },
        {
            id: 3,
            imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            title: 'Blogging Website',
            liveLink: 'https://live-link.com',
            githubLink: 'https://github.com/link',
            description: [
                "I'm description 1",
                "I'm description 2",
                "I'm description 3",
                "I'm description 4",
            ],
        },
        {
            id: 4,
            imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            title: 'Blogging Website',
            liveLink: 'https://live-link.com',
            githubLink: 'https://github.com/link',
            description: [
                "I'm description 1",
                "I'm description 2",
                "I'm description 3",
                "I'm description 4",
            ],
        },
        {
            id: 5,
            imageUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            title: 'Blogging Website',
            liveLink: 'https://live-link.com',
            githubLink: 'https://github.com/link',
            description: [
                "I'm description 1",
                "I'm description 2",
                "I'm description 3",
                "I'm description 4",
            ],
        },
    ];

    return(
        <>
            <Row gutter={20} id="projects">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{marginTop:"10px", marginBottom:"20px", textAlign:"center"}} className="large_medium_text main_title">Projects</Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display:"flex"}}>
                    <Row gutter={[20, 20]}>
                    {cardDetails.map((details) => (
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <div>
                                <CardComponent key={details.id} {...details} />
                            </div>
                        </Col>
                    ))}
                    </Row>
                </Col>
            </Row>
            <Row>
                
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}style={{display:"flex", justifyContent: "center", marginTop:"25px"}}>
                <div ><a className="git_link small_text" href="https://github.com/shiv1119?tab=repositories">Click For More</a></div>
                </Col>
            </Row>
        </>
    )
}

export default Projects;