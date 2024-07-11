import { Image, Row, Col } from "antd"

const Repo = () =>{
    return(
        <>
            <Row  gutter={20} style={{marginTop:"20px"}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}  style={{display:"flex", justifyContent:"space-around"}}>
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&theme=dark&repo=BloggingWebsite">
                            </Image>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{display:"flex"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&theme=dark&repo=EventProject">
                            </Image>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row  gutter={20} style={{marginTop:"20px"}}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display:"flex", justifyContent:"space-around"}}>
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&theme=dark&repo=TechWebsite">
                            </Image>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{display:"flex"}}>
                            <Image className="repo" preview={false} width={500} src="https://github-readme-stats.vercel.app/api/pin/?username=shiv1119&theme=dark&repo=Agile-final-project">
                            </Image>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{display:"flex", justifyContent: "center", marginTop:"25px"}}>
                    <a className="small_text git_link " href="https://github.com/shiv1119?tab=repositories">Click For More</a>
                </Col>
            </Row>
        </>
    )
}

export default Repo;