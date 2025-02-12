'use client';
import { useState } from 'react'; 
import Image from "next/image";
import ImageAsset1 from "../image/surpise.jpeg"
import Link from "next/link"

export default function Home() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveButton = () => {
    const newTop = Math.random() * 100 - 50; // สุ่มตำแหน่ง top (-50px ถึง 50px)
    const newLeft = Math.random() * 100 - 50; // สุ่มตำแหน่ง left (-50px ถึง 50px)
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="Container">
      <div className="a2">LoveYounaka</div>
      <div className="boxmessage">
        <p className="h1text">นี่ๆหันหลังมาจิ</p>
    
        <Image
           src={ImageAsset1} 
           width={1000}
          height={1000}
          alt="Picture of dog"
          className="img"
        />
        
      
      </div>
    </div>
  );
}
