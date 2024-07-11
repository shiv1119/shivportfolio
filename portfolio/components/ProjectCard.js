"use client";
import React from 'react';
import { Card, Row, Col, Image } from 'antd';

const CardComponent = ({id, imageUrl, title, liveLink, githubLink, description }) => {
    return (
        <Card key={id} hoverable={true}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 15]} style={{ display: "flex", alignItems: "center" }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={14} xxl={14}>
                        <Image
                            preview={false}
                            style={{ width: "100%", objectFit: "contain", borderRadius: "5px" }}
                            src={imageUrl}
                        />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={10} xxl={10}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ lineHeight: "1.2rem" }} className="medium_text">
                            {title}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ marginBottom: "2px" }}>
                            <a href={liveLink}>Live</a>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ lineHeight: "0.9rem" }}>
                            <a href={githubLink}>GitHub Link</a>
                        </Col>
                    </Col>
                </Row>
            </Col>
            <Col style={{ marginTop: "10px" }}>
                <details>
                    <summary style={{ cursor: "pointer" }}>Description</summary>
                    <ul>
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </details>
            </Col>
        </Card>
    );
};

export default CardComponent;
