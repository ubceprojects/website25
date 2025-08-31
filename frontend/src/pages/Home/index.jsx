import "./style.css";
import MenuBar from "../../components/MenuBar";
import HomeIllus from "../../components/HomeIllus";
import { GridBackground } from "../../components/GridBackground";

const Home = () => {
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
                <button className="home-button">Become a Member →</button>
            </div>

            <div className="home-illus">
                <HomeIllus />
            </div>
        </div>
    );
};

export default Home;
