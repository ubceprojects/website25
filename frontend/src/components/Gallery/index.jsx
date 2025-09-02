import Masonry from "../Masonry";
import "./style.css";
import { useEffect } from "react";

const Gallery = () => {
    const items = [
        {
            id: "1",
            img: "/gallery/1.avif",
            height: 400,
            title: "Executive Dinner Night",
        },
        {
            id: "2",
            img: "/gallery/2.avif",
            height: 250,
            title: "Company Crawl at TTT Studios",
        },
        {
            id: "3",
            img: "/gallery/3.avif",
            height: 600,
            title: "Company Crawl at KPMG",
        },
        {
            id: "4",
            img: "/gallery/4.avif",
            height: 800,
            title: "Company Crawl at TTT Studios",
        },
        {
            id: "5",
            img: "/gallery/5.avif",
            height: 250,
            title: "eProjects Launch Event",
        },
        {
            id: "6",
            img: "/gallery/6.avif",
            height: 300,
            title: "eProjects Launch Event",
        },
        {
            id: "7",
            img: "/gallery/7.avif",
            height: 400,
            title: "eProjects Launch Event",
        },
        {
            id: "8",
            img: "/gallery/8.avif",
            height: 500,
            title: "eProjects Launch Event",
        },
        {
            id: "9",
            img: "/gallery/9.avif",
            height: 600,
            title: "eProjects Launch Event",
        },
        {
            id: "10",
            img: "/gallery/10.avif",
            height: 700,
            title: "eProjects Launch Event",
        },
        {
            id: "11",
            img: "/gallery/11.avif",
            height: 800,
            title: "Tech Intrapreneur Event",
        },
        {
            id: "12",
            img: "/gallery/12.avif",
            height: 900,
            title: "Tech Intrapreneur Event",
        },
        {
            id: "13",
            img: "/gallery/13.avif",
            height: 1000,
            title: "Tech Intrapreneur Event",
        },
        {
            id: "14",
            img: "/gallery/14.avif",
            height: 1100,
            title: "Tech Intrapreneur Event",
        },
    ];

    useEffect(() => {
        items.forEach(({ img }) => {
            const image = new Image();
            image.src = img;
        });
    }, [items]);

    return (
        <div className="gallery-photos">
            <Masonry items={items} ease="power3.out" duration={0.6} stagger={0.05} animateFrom="center" scaleOnHover={true} hoverScale={0.95} blurToFocus={true} colorShiftOnHover={true} />
        </div>
    );
};

export default Gallery;
