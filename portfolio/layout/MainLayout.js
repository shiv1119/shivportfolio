'use client'
import { Inter } from "next/font/google";
import React, { Children } from 'react';
import { Row, Col } from 'antd';
import "../styles/globals.css";
import Footer from "@/footernavbar/footer";

const inter = Inter({ subsets: ["latin"] });

const MainLayout= ({children}) => {
  return (
    <main>
      <Row><Col xxl={24}>{children}</Col></Row>
      <Row xxl={24}><Col><Footer /></Col></Row>
    </main>
);
}
export default MainLayout;