import "./style.css";
import MenuBar from "../../components/MenuBar";
import GoalCard from "../../components/GoalCard";
import Gallery from "../../components/Gallery";

const About = () => {
    return (
        <div className="about-container">
            <MenuBar />

            <div className="about-heading">
                <h1>About Us</h1>
            </div>

            <div className="about-subheading">
                <p>
                    Tomorrow's business and community leaders are actively involved in a thriving atmosphere of growth and learning on our campus. eProjects is dedicated to supporting and encouraging
                    students during this stage of development. We believe in fostering an environment that promotes collaboration, innovation, and personal growth among our students. We provide
                    resources, mentorship, and opportunities that help students turn ideas into action. By connecting passion with purpose, we aim to inspire meaningful and lasting impact.
                </p>
            </div>

            <div className="about-journey-container">
                <div className="about-journey-heading">
                    <h2>Our Journey</h2>
                </div>

                <div className="about-journey-path"></div>

                <div className="about-journey-card journey-1">
                    <div className="journey-heading">2015 Founded</div>
                    <div className="journey-content">some text that can go here blah blah blah blah blah</div>
                    <div className="journey-number number-1">1</div>
                </div>

                <div className="about-journey-card journey-2">
                    <div className="journey-heading">2015 Founded</div>
                    <div className="journey-content">some text that can go here blah blah blah blah blah</div>
                    <div className="journey-number number-2">2</div>
                </div>

                <div className="about-journey-card journey-3">
                    <div className="journey-heading">2015 Founded</div>
                    <div className="journey-content">some text that can go here blah blah blah blah blah</div>
                    <div className="journey-number number-3">3</div>
                </div>
            </div>

            <div className="about-goals-container">
                <div className="about-goals-heading">
                    <h1>Our Goals for 2025/26</h1>
                </div>
                <div className="about-goals-content">
                    <GoalCard number={1} heading="Connection" content="Connecting students with entrepreneurs for relationship-building, industry insights, and firsthand experiences." />
                    <GoalCard
                        number={2}
                        heading="Growth & Inclusivity"
                        content="Exclusive first-year events offering personalized support to develop skills and showcase learning, fostering innovation and entrepreneurship. "
                    />
                    <GoalCard number={3} heading="Collaboration" content="Collaborating with other clubs to highlight the relevance of entrepreneurship across all business fields." />
                </div>
            </div>

            <div className="about-award-container">
                <div className="award-left">
                    <div className="award-heading">
                        <h1>Top Small Club</h1>
                    </div>
                    <div className="award-content">
                        <p>
                            UBC eProjects won the Top Small Club award at blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah .
                        </p>
                    </div>
                </div>
                <div className="award-right"></div>
            </div>

            <div className="about-gallery-container">
                <div className="gallery-heading">
                    <h1>Our Gallery</h1>
                </div>
                <Gallery />
            </div>
        </div>
    );
};

export default About;
