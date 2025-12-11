import "./style.css";
import MenuBar from "../../components/MenuBar";
import HomeIllus from "../../components/HomeIllus";
import { GridBackground } from "../../components/GridBackground";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "UBC eProjects | Entrepreneurship Club at University of British Columbia";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'UBC eProjects is the premier student entrepreneurship club at the University of British Columbia. Join UBC eprojects to connect with entrepreneurs, attend networking events, and build your startup in Vancouver.');
        }
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://ubceprojects.netlify.app/');
        }
    }, []);

    return (
        <div className="home-container">
            <MenuBar />
            <GridBackground />
            <div className="text-container">
                <div className="home-title">
                    <h1>UBC eProjects</h1>
                </div>
                <div className="home-subtitle">
                    <p>Connecting aspiring entrepreneurs and start-up founders in Vancouver.</p>
                </div>
                <a className="home-button"
                href = "https://www.bouncelife.com/events/68ca445c9f698c2d07cb283d" target="_blank" rel="noopener noreferrer">Become a Member →</a>
            </div>

            <div className="home-illus">
                <HomeIllus />
            </div>
        </div>
    );
};

export default Home;
