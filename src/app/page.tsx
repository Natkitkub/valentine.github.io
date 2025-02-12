'use client';
import { useState } from 'react'; // ใช้ useState
import Image from "next/image";
import imageAsset1 from '../app/image/doggy.jpg'; // รูปแรก
import imageAsset2 from '../app/image/dog1.jpeg'; // รูปที่สอง
import imageAsset3 from '../app/image/dog2.jpeg'; // รูปที่สาม
import Link from "next/link"
export default function Home() {
  const [imageIndex, setImageIndex] = useState(0); // ใช้ index เพื่อเก็บตำแหน่งของรูปภาพที่จะแสดง

  // Array ของรูปภาพทั้งหมด
  const images = [imageAsset1, imageAsset2, imageAsset3];

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
        <p className="h1text">คุณชอบเด็กมหิดลมั้ย</p>
        
        <Image
          src={images[imageIndex]} // ใช้ index เพื่อดึงรูปภาพจาก array
          width={500}
          height={500}
          alt="Picture of dog"
          className="img"
        />
        
        <div className="button1">
          <Link href="/page2"><button className="button3">Yes</button></Link>

          <button className="button-4" onClick={handleImageChange}>No</button> {/* เรียกใช้ฟังก์ชัน */}
        </div>
      </div>
    </div>
  );
}
