import {
    HomeOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';

import { Image } from 'antd';
import Link from 'next/link';
import FooterIcon from './footerIcon';

const Footer = () =>(
    <div className="footerStyle">
      <Link href={'#'}><FooterIcon title="Home" src="./images/home.png"/></Link>
      <Link href={'#'}><FooterIcon title="About Me" src="./images/profile.png"/></Link>
      <Link href={'#'}><FooterIcon title="Skills" src="./images/skills.png"/></Link>
      <Link href={'#'}> <FooterIcon title="Experience" src="./images/experience.png"/></Link>
      <Link href={'#'}><FooterIcon title="Education" src="./images/education.png"/></Link>
      <Link href={'#'}> <FooterIcon title="GitHub Stats" src="./images/github.png"/></Link>
      <Link href={'#'}><FooterIcon title="Projects" src="./images/project.png"/></Link>
      <Link href={'#'}><FooterIcon title="Contact Me" src="./images/contact.png"/></Link>
    </div>
)

export default Footer