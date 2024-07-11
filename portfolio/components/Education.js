"use client"
import { Col, Row, Image, Card} from 'antd';



const Education = () =>(
<Row gutter={[20,30]} id='education'>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='large_medium_text'>
        <div className='main_title' style={{textAlign:"center"}}>Education</div>
    </Col>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='margin_top'>
        <Row>
            <Col md={12} lg={12} xl={12} xxl={12} className='edu_max_width_col'><div  className='edu_max_width'><Image lazyload = "true" preview={false}src='./images/alliance.jpg' className='edu_max_width_image'/></div></Col>
            <Col md={12} lg={12} xl={12} xxl={12}><div>
                <Card style={{border:"none", borderRadius:"5px", zIndex:"10", opacity:"1"}} className='background_gredient card_left'   title={
                    <div style={{display:"flex", gap:"15px", alignItems:"center"}}>
                        <div><Image className='white'  width={40} src='./images/education.png'/></div>
                        <div className='medium_text' style={{color:"#ffffff",whiteSpace:"normal",lineHeight:"1.2rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis", padding:"15px 0px"}}>Bachelor Of Technology in Computer Science & Enginerring <small>(2022- 2026)</small></div>
                    </div>
                }
                >
                    <div className='small_text' style={{display:"flex", gap:"15px", alignItems:"center"}}>
                        <div><Image className='white'  preview={false} width={25} src='./images/university.png'/></div>
                        <div>Alliance College Of Engineering & Design</div>
                    </div>
                    <div className='small_text' style={{display:"flex", gap:"15px", alignItems:"center"}}>
                        <div><Image className='white' preview={false} width={25} src='./images/location.png'/></div>
                        <div>Bengeluru, Karnataka - 562 106</div>
                    </div>
                    <div className='small_text'>
                        <div style={{whiteSpace:"normal",lineHeight:"1.2rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis", marginTop:"15px"}}>Skills - <p style={{marginTop:"7px"}} className='small_text'>Data Structure & Algorithms, C programming, C++, Python, Object Oriented Programming, MySql, Machine Learning, Java Programming, Teamwork, Leardership, Problem Solving, Time Management etc...</p> </div>
                    </div>
                    <div className='small_text'>
                        <div style={{whiteSpace:"normal",lineHeight:"1rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}} className='small_text'>Activities - 
                        <ul className='small_text' style={{marginTop:"7px"}}>
                            <li>Member of GDSC </li>
                            <li>Social Internship</li>
                            <li>Participated in workshops & coding competition</li>
                        </ul>
                        </div>
                    </div>
                    <div className='small_text'>
                        <div style={{whiteSpace:"normal",lineHeight:"1.1rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>Grade - <span className='small_text'> 8.8 Cgpa</span>
                        </div>
                    </div>
                </Card>

            </div></Col>
        </Row>
    </Col>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Row>
        <Col md={12} lg={12} xl={12} xxl={12}><div>
                <Card style={{border:"none", borderRadius:"5px", zIndex:"10", opacity:"1"}} className='background_gredient card_right'  title={
                    <div style={{display:"flex", gap:"15px", alignItems:"center"}}>
                        <div><Image className='white'  width={40} src='./images/education.png'/></div>
                        <div className='medium_text' style={{color:"#ffffff",whiteSpace:"normal",lineHeight:"1.2rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis", padding:"15px 0px", fontWeight:"600"}}>Intermediate <small>(Physics, Chemistry, Mathematics & Computer Science, 2022- 2026)</small></div>
                    </div>
                }
                >
                    <div className='small_text' style={{display:"flex", gap:"15px", alignItems:"center"}}>
                        <div><Image className='white'  preview={false} width={25} src='./images/university.png'/></div>
                        <div>Jagran Public School</div>
                    </div>
                    <div className='small_text' style={{display:"flex", gap:"15px", alignItems:"center"}}>
                        <div><Image className='white' preview={false} width={25} src='./images/location.png'/></div>
                        <div>Lucknow, Uttar Pradesh 226010</div>
                    </div>
                    <div className='small_text'>
                        <div style={{whiteSpace:"normal",lineHeight:"1.2rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis", marginTop:"15px"}}>Skills - <p style={{marginTop:"7px"}} className='small_text'>Data Structure, Sorting Algorithms, Python, MySql,Teamwork, Leardership, Problem Solving, Time Management etc...</p> </div>
                    </div>
                    <div className='small_text'>
                        <div style={{whiteSpace:"normal",lineHeight:"1rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>Activities - 
                        <ul className='small_text' style={{marginTop:"7px"}}>
                            <li>Data Structures using Python</li>
                            <li>Physics, Chemistry & Maths</li>
                        </ul>
                        </div>
                    </div>
                    <div className='small_text'>
                        <div style={{whiteSpace:"normal",lineHeight:"1.1rem", wordWrap: "break-word", overflow:"hidden",textOverflow:"ellipsis"}}>Percentage - <span className='small_text'> 73.4%</span>
                        </div>
                    </div>
                </Card>

            </div></Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className='edu_max_width_col_rev'><div  className='edu_max_width_rev'><Image lazyload = "true" preview={false}src='./images/jagranpublicschool.jpg' className='edu_max_width_image'/></div></Col>
        </Row>
    </Col>
</Row>
)



export default Education
