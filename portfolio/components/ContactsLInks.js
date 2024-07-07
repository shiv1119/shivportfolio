"use clinet"
import React from 'react';
import { motion } from 'framer-motion';
import { MailOutlined, LinkedinFilled, GithubFilled, TwitterSquareFilled, PhoneFilled   } from '@ant-design/icons';

const ContactsLinks = ({ href, icon: Icon}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      className="contact_link"
      href={href}
    >
      <Icon />
    </motion.a>
  );
};

export default ContactsLinks;
