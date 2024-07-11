import { ConfigProvider, Timeline } from 'antd';
import {Col,Row} from "antd";
import { Image } from 'antd';
const Experience = () => {
  return (
    <ConfigProvider
        theme={{
            components: {
            Timeline: {
                tailColor:"#b8b6b6",
                dotBorderWidth:"4px",
            },
            },
      }}
    >
      <Row id='experience'>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display:"flex",flexDirection: "column", gap:"15px", marginTop:"10px"}}>
                <div style={{textAlign:"center"}} className='large_medium_text main_title'>Experience</div>
                <div style={{fontSize:"1.2rem", fontWeight:"500", color:"#ffffff",paddingTop:"1.5rem" }}> 
                <Timeline 
                mode='alternate'
                    items={[
                    // {   
                    //     color: 'red',
                    //     style:{paddingBottom:"2rem", color:"black"},
                    //     label: 'Start Date - End Date',
                    //     children: <>
                    //         <Slide>
                    //         <Row style={{padding:"15px 0px", display:"flex", gap:"10px", flexDirection:"row"}} className='experience_gradient'>
                    //             <Col>
                    //             <Image preview={false}  width={60}style={{border:"1px solid white", borderRadius:"50%", background:"rgb(0, 78, 88)"}} src="https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1631311446380?e=1726099200&v=beta&t=rqMa_4BPJeaFBksZ-tp8Dhvv_so6aSbsFd1gUD02G4g"/>
                    //             </Col>
                    //             <Col>
                    //                 <div className="medium_text">Senior Software Engineer</div>
                    //                 <div className='medium_small'>Google, Full-Time</div>
                    //                 <div className="small_text">Bengaluru, Karnataka India</div>
                    //                 <div> 
                    //                     <div className="medium_small">Roles & Responsbilities</div>
                    //                         <ul className="ul large_margin_left small_text">
                    //                             <li className='small_text'>Roles 1</li>
                    //                             <li className='small_text'>Roles 2</li>
                    //                             <li className='small_text'>Roles 3</li>
                    //                         </ul>
                    //                 </div>
                    //                 <div>
                    //                     <div className="medium_small">Skills :-</div>
                    //                     <div className='small_text'>React Js, Java, Machine Learning, AI</div>
                    //                 </div>
                    //             </Col>
                    //         </Row>
                    //         </Slide>
                    //     </>,
                    // },
                    {   
                        color: 'red',
                        style:{paddingBottom:"1rem", color:"white"},
                        label: '2022 - Present',
                        children: <>
                        <Row style={{ padding: "15px 10px", display:"flex", flexDirection:"row", gap:"10px"}} className='experience_gradient'>
                            <Col>
                            <Image lazyload = "true" preview={false}  width={60}style={{border:"1px solid white", borderRadius:"50%", background:"rgb(0, 78, 88)"}} src="./images/alliancelogo.png" />
                            </Col>
                            <Col>
                                <div className="medium_text" style={{lineHeight:"1.2rem"}}>Self Employed</div>
                                <div className="small_text">Alliance University</div>
                                <div className="small_text" style={{lineHeight:"1.2rem"}}><Image  preview={false} width={18} src='./images/location.png' className='white location'/> Bengaluru, Karnataka India</div>
                                <div> 
                                    <div className="small_text">Roles & Responsbilities</div>
                                        <div className="ul large_margin_left small_text">
                                            <span className='small_text' style={{overflowWrap: "break-word",lineHeight:"1.2rem"}}>1 - Develop several fullstack webapps.</span><br />
                                            <span className='small_text' style={{overflowWrap: "break-word",lineHeight:"1.2rem"}}>2 - Cloud Management.</span><br />
                                            <span className='small_text' style={{overflowWrap: "break-word",lineHeight:"1.2rem"}}>3 - Learning AI & Ml.</span>
                                        </div>
                                </div>
                                <div>
                                    <div className='small_text'>Skills :-</div>
                                    <div className='small_text' style={{lineHeight:"1.3rem"}}>Django, Restframework, Postgresql, NextJs etc...</div>
                                </div>
                            </Col>
                        </Row>
                    </>,
                    },
                    {   
                        style:{color:"white"},
                        label: '01/03/2024 - 01/04/2004',
                        children: <>
                        <Row style={{ padding: "15px 10px", display:"flex", flexDirection:"row-reverse", gap:"10px"}} className='experience_gradient_rev'>
                            <Col>
                                <Image lazyload = "true" preview={false}  width={60} style={{border:"1px solid white", borderRadius:"50%", background:"rgb(0, 78, 88)"}} src="./images/internpixel.jpeg" />
                            </Col>
                            <Col>
                                <div className="medium_text" style={{lineHeight:"1.2rem"}}>Front-end Developer Intern</div>
                                <div className="small_text">InternPixel, Part-time</div>
                                <div className="small_text" style={{lineHeight:"1.2rem"}} ><Image  preview={false} width={18} src='./images/location.png' className='white location'/> Bengaluru, Karnataka India</div>
                                <div> 
                                    <div className="small_text">Roles & Responsbilities</div>
                                        <div className="ul large_margin_left small_text" >
                                            <span className='small_text' style={{overflowWrap: "break-word", lineHeight:"1.2rem"}}>1 - To collabrate with the development team.</span> <br />
                                            <span className='small_text' style={{overflowWrap: "break-word", lineHeight:"1.2rem"}}>2 -  Develop a complex landing page.</span>
                                        </div>
                                </div>
                                <div>
                                    <div className="small_text">Skills</div>
                                    <div className='small_text' style={{overflowWrap: "break-word", lineHeight:"1rem"}}>Css, Tailwind Css, Next Js, Team Work, Collabaration etc.</div>
                                </div>
                            </Col>
                        </Row>
                    </>,
                    },
                    ]}
                />
                </div>
            </Col>
        </Row>
    </ConfigProvider>
  );
};
export default Experience;