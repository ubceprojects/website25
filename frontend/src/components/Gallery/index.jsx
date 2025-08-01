import Masonry from "../Masonry";
import "./style.css";

const Gallery = () => {
    const items = [
        {
            id: "1",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "2",
            img: "https://picsum.photos/id/1011/600/750?grayscale",
            url: "https://example.com/two",
            height: 250,
        },
        {
            id: "3",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 600,
        },
        {
            id: "4",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 800,
        },
        {
            id: "5",
            img: "https://picsum.photos/id/1020/600/800?grayscale",
            url: "https://example.com/three",
            height: 250,
        },
    ];

    return (
        <div className="gallery-photos">
            <Masonry items={items} ease="power3.out" duration={0.6} stagger={0.05} animateFrom="center" scaleOnHover={true} hoverScale={0.95} blurToFocus={true} colorShiftOnHover={true} />
        </div>
    );
};

export default Gallery;
