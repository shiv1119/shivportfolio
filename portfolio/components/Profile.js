"use client"
import { Col, Row, Image } from 'antd';
import { MailOutlined, LinkedinFilled, GithubFilled, TwitterSquareFilled, PhoneFilled   } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Typewriter } from './Typewriter';
import ContactsLinks from './ContactsLInks';

const Profile = () =>(
<Row id='home'>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Row gutter={[20,10]}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className='profile_image_col'>
                <div className='profile_image_div'>
                    <Image  preview={false} src='./images/profileshiv.png' />
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} className='profile_info_flex_col'>
                <div className='profile_info_flex profile_info_padding' style={{background: "linear-gradient(90deg, rgba(24,24,24,0.1026611328125) 0%, rgba(184,184,184,0.09705889191614148) 14%, rgba(45,45,45,0.1026611328125) 100%)"}}>
                    <div className='large_text lineheight'><Typewriter texts={["Shiv Nandan Verma...", "Fullstack Developer...", "DevOps Engineer..."]} /></div>
                    <div className='large_medium_text lineheight center'>Student at Alliance University</div>
                    <div className='medium_small_text lineheight'><Image  preview={false} width={18} src='./images/location.png' className='white location'/> Bengaluru, Karnataka</div>
                    <div style={{display:"flex", gap:"13px"}}>
                        <ContactsLinks 
                            href="mailto:webmaster@example.com"
                            icon={PhoneFilled}
                        />
                        <ContactsLinks 
                            href="mailto:webmaster@example.com"
                            icon={LinkedinFilled}
                        />
                        <ContactsLinks 
                            href="mailto:webmaster@example.com"
                            icon={MailOutlined}
                        />
                        <ContactsLinks 
                            href="mailto:webmaster@example.com"
                            icon={GithubFilled}
                        />
                        <ContactsLinks 
                            href="mailto:webmaster@example.com"
                            icon={TwitterSquareFilled}
                        />

                    </div>
                </div>
            </Col>
        </Row>
    </Col>
</Row>
)



export default Profile
