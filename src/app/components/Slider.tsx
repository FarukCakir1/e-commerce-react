'use client'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import SliderItem from './SliderItem';
import { useEffect, useRef, useState } from 'react';

export default function Slider({itemsPerPage, gap}: {itemsPerPage: number, gap: number}) {
    const fakeList: Array<any> = [
        {
          "image": "https://n11scdn.akamaized.net/a1/226_226/14/40/66/99/IMG-9090445001024614508.jpg",
          "routeUrl": "1",
          "title": "Şarjlı Nostaljik Radyo Meieraaaaa",
          "price": "800",
          "rate": 3.5,
          "id": 1,
          "order": 2
        },
        {
          "image": "https://n11scdn.akamaized.net/a1/226_226/06/14/16/54/10898711.jpg",
          "routeUrl": "1",
          "title": "Şarjlı Nostaljik Radyo Meier",
          "price": 80,
          "rate": 5,
          "id": 2,
          "order": 0
        },
        {
          "image": "https://n11scdn.akamaized.net/a1/226_226/06/96/13/10/IMG-1486102379293473233.jpg",
          "routeUrl": "1",
          "title": "Tois Mitur 3 Tekerlekli Scooter",
          "price": 50,
          "rate": 5,
          "id": 3,
          "order": 3
        },
        {
          "image": "https://n11scdn.akamaized.net/a1/226_226/11/43/76/61/IMG-6454831831079238194.jpg",
          "routeUrl": "1",
          "title": "Pure IQ Grafik Dijital Çocuk Yazı Çizim Tableti LCD 8.5",
          "price": 60,
          "rate": 5,
          "id": 4,
          "order": 5
        },
        {
          "image": "https://n11scdn.akamaized.net/a1/226_226/10/72/84/88/IMG-4917808942184959824.jpg",
          "routeUrl": "1",
          "title": "Royjones Terlik Modelleri Unisex Anatomik Günlük Terlik 7001",
          "price": 123,
          "rate": 5,
          "id": 5,
          "order": 6
        },
        {
          "image": "https://productimages.hepsiburada.net/s/411/200-200/110000440701673.jpg",
          "routeUrl": "1",
          "title": "Test Ürün 2",
          "price": 450,
          "rate": 5,
          "id": 6,
          "order": 7
        },
        {
          "image": "https://productimages.hepsiburada.net/s/160/200-200/110000118727098.jpg",
          "routeUrl": "1",
          "title": "Test Ürün 3",
          "price": 450,
          "rate": 5,
          "id": 7,
          "order": 4
        },
        {
          "image": "https://productimages.hepsiburada.net/s/274/200-200/110000260569005.jpg",
          "routeUrl": "1",
          "title": "Test Ürün 4",
          "price": 450,
          "rate": 5,
          "id": 8,
          "order": 8
        },
        {
          "image": "https://productimages.hepsiburada.net/s/411/200-200/110000440701673.jpg",
          "routeUrl": "1",
          "title": "Test Ürün 5",
          "price": 450,
          "rate": 5,
          "id": 9,
          "order": 1
        }
      ] 
      const sliderWrapperRef:any = useRef(null)
      const slide = (direction: 'left' | 'right'): undefined => {
        const slideValue = sliderWrapperRef.current.clientWidth || 0
        sliderWrapperRef.current?.scrollBy({
          top:0,
          left: direction === 'right' ? slideValue : slideValue * -1,
          behavior: 'smooth'
        })
      }
      const [width, setWidth] = useState(0);
      useEffect(() => {
        setWidth(sliderWrapperRef.current?.clientWidth / itemsPerPage - gap);
      }, [itemsPerPage, gap]);
    return(
    <div className="w-full relative">
        <div
            onClick={() => slide('left')}
            className="left w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center absolute top-[calc(50%-20px)] left-[-60px] cursor-pointer hover:bg-gray-50 transition-colors"
        >
            <LeftOutlined />
        </div>
        <div 
            onClick={() => slide('right')}
            className="right w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center absolute top-[calc(50%-20px)] right-[-60px] cursor-pointer hover:bg-gray-50 transition-colors"
        >
            <RightOutlined />
        </div>
    <div className="w-full overflow-hidden" ref={sliderWrapperRef}>
      <div className="w-auto flex flex-shrink-0 gap-5">
        { fakeList.map(slide => <SliderItem key={slide.id} title={slide.title} price={slide.price} image={slide.image} itemWidth={width}/>) }
      </div>
    </div>
  </div>
    )
}