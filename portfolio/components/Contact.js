"use client"
import React from 'react';
import { Button, Form, Input, Space, Row, Col, Card } from 'antd';

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(true));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};
const { TextArea } = Input;

const Contacts = ({ onClose }) => {
  const [form] = Form.useForm();
  return (
    <div id="contacts">
    <Form>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <div style={{fontWeight:"bold", textAlign:"center"}} className="large_medium_text main_title">Contact Me</div>
            <Card style={{ border:"none", padding:"30px", background:"none", backdropFilter:"blur(1000px)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} >
            <Row gutter={20} style={{marginTop:"5px"}}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                    <Form.Item 
                      name="firstName"
                      label={<span style={{ color: '#FFFFFF' }}>First Name</span>}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder='Drop first name...' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                <Form.Item
                      name="lastName"
                      label={<span style={{ color: '#FFFFFF' }}>Last Name</span>}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder='Drop last name...' />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                    <Form.Item
                      name="email"
                      label={<span style={{ color: '#FFFFFF' }}>Emial Id</span>}
                      rules={[
                        {
                          required: true,
                          type: 'email'
                        },
                      ]}
                    >
                      <Input type='email' placeholder='Drop email id...'/>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} > 
                <Form.Item
                      name="phone"
                      label={<span style={{ color: '#FFFFFF' }}>Mob. Number </span>}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input type="tel" placeholder='Drop phone number...' />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} > 
                    <Form.Item
                      name="textarea"
                      label={<span style={{ color: '#FFFFFF' }}>Message </span>}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <TextArea placeholder="Drop message..."/>
                    </Form.Item>
                </Col>
            </Row>
            <Row style={{marginBottom:"-20px"}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}> 
                <div style={{display:"flex", justifyContent:"center"}}>
                <Form.Item>
                  <Space>
                    <SubmitButton form={form}>Submit</SubmitButton>
                    <Button htmlType="reset">Reset</Button>
                  </Space>
                </Form.Item>
                </div>
                </Col>
            </Row>
            </Card>
        </Col>
      </Row>
      </Form>
    </div>
  );
};
export default Contacts;