import {Image, Col,Row, Card} from "antd";
const GitHubStats = () =>{
    return(
            <Row id="githubstats">
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div style={{fontWeight:"bold", paddingBottom:"25px", textAlign:"center", marginTop:"25px"}} className="large_medium_text main_title">Github Stats</div>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="col-style">
                            <Image preview={false} width={1015}
                                className="repo"
                                style={{background:"#000", border:"1px solid #e3e1e1"}}
                                src="https://raw.githubusercontent.com/shiv1119/shiv1119/output/snake.svg"
                            ></Image>

                        </Col>
                        
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="col-style">
                            <Image preview={false}
                                className="repo"
                                width={1015}
                                src="https://github-readme-stats.vercel.app/api?username=shiv1119&show_icons=true&theme=dark&card_width=800&title_color=ffffff"
                            ></Image>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="col-style">

                            <Image preview={false}
                                className="repo"
                                width={1015}
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=shiv1119&layout=compact&langs_count=10&theme=dark&card_width=800&title_color=ffffff"
                            ></Image>
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
}

export default GitHubStats;