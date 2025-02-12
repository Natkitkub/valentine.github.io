'use client';
import { useState } from 'react'; // ใช้ useState
import Image from "next/image";
import ImageAsset1 from "../image/dog21.jpeg"
import ImageAsset2 from "../image/dog22.jpeg"
import ImageAsset3 from "../image/dog23.jpeg"

 // รูปที่สาม
import Link from "next/link"

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0); // ใช้ index เพื่อเก็บตำแหน่งของรูปภาพที่จะแสดง

  // Array ของรูปภาพทั้งหมด
  const images = [ImageAsset1, ImageAsset2, ImageAsset3];

  // ฟังก์ชันที่สลับรูปภาพ
  const handleImageChange = () => {
    // เปลี่ยน index ไปยังรูปถัดไป (ถ้าถึงรูปสุดท้ายก็กลับไปเริ่มที่รูปแรก)
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <div className="Container">
      <div className="a2">LoveYounaka</div>
      <div className="boxmessage">
        <p className="h1text">อุ้ย!!ชอบหรอเค้าน่ารักมั้ย</p>
    
        <Image
           src={images[imageIndex]} // ใช้ index เพื่อดึงรูปภาพจาก array
           width={500}
          height={500}
          alt="Picture of dog"
          className="img"
        />
        
        <div className="button1">
          <Link href="page3"><button className="button3">Yes</button></Link>
          
          <button className="button-4"onClick={handleImageChange} >No</button> {/* เรียกใช้ฟังก์ชัน */}
        </div>
      </div>
    </div>
  );
}

