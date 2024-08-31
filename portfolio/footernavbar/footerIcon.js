
import { Tooltip } from 'antd';
import { Image } from 'antd';

const FooterIcon = ({ src, title, width = 50}) => {
  return (
    <div className='footerIconDiv'>
      <Tooltip trigger={'hover'} title={title} overlayInnerStyle={{ 
              backgroundColor: 'white', 
              color: 'black', 
              fontSize:"11px",
              display:"flex",
              padding: "5px 20px",
              justifyContent:"center",
              alignItems:"center",
              borderRadius: '4px', }}>
        <Image preview={false} src={src} alt={title} className="footerIcon white" />
      </Tooltip>
    </div>
  );
};


export default FooterIcon