'use client';
import { useState } from 'react';

const images = [
  '../app/image/dog1.jpeg',
  '../app/image/dog2.jpeg'
 
];

const ImageToggle = () => {
  // ใช้ useState เพื่อเก็บรูปภาพที่จะแสดง
  const [image, setImage] = useState(images[0]);

  const handleNoClick = () => {
        const nextIndex = (index + 1) % images.length;  // % images.length เพื่อให้วนกลับไปที่รูปแรกเมื่อถึงรูปสุดท้าย
        setIndex(nextIndex);
  };


};

export default ImageToggle;
