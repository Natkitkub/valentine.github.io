'use client';
import { useState } from 'react'; 
import Image from "next/image";
import ImageAsset1 from "../image/bemyvalenties.jpeg"
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
        <p className="h1text">ถ้างั้น CanyouBeMyValentine?</p>
    
        <Image
           src={ImageAsset1} 
           width={500}
          height={500}
          alt="Picture of dog"
          className="img"
        />
        
        <div className="button1">
          <Link href="page4"><button className="button3">Yes</button></Link>
          
          <button 
            className="button-4" 
            onMouseEnter={moveButton}
            style={{ position: "relative", top: `${position.top}px`, left: `${position.left}px` }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
