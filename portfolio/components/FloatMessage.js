"use client"
import React from 'react';
import { FloatButton, Row, Col } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import Contacts from './Contact';

const FloatMessage = () =>{
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
    <div>
        <div className='floatmessage'>
            <div><a onClick={() => scrollToSection('contacts')}>
                    <FloatButton className='ant-float-button' icon={< MessageOutlined />} />
                </a>
            </div>
        </div>
    </div>
    )
}


export default FloatMessage;