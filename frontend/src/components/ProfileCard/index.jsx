import "./style.css";

const ProfileCard = ({ name, role, desc, img, linkedin, instagram, email }) => (
    <div className="card">
        <div className={"cardOverlaySquare"}></div>
        <div className={"profilePic"}>{img && <img src={img} alt={name} className={"profileImg"} loading="lazy" decoding="async" />}</div>
        <div className={"profileName"}>{name}</div>
        <div className={"profileRole"}>{role}</div>
        <div className={"profileDescription"}>{desc}</div>

        {/* MOBILE STYLE */}
        <div className="social-icons">
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            )}
            {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} className="social-link">
                    <i className="fa-regular fa-envelope"></i>
                </a>
            )}
        </div>

        {/* DESKTOP STYLE */}
        <div className="social-icons-desktop">
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link-desktop">
                    <i className="fa-brands fa-linkedin-in fa-2xl" style={{ color: "#ffffff" }}></i>
                </a>
            )}
            {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-link-desktop">
                    <i className="fa-brands fa-instagram fa-2xl" style={{ color: "#ffffff" }}></i>
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} className="social-link-desktop">
                    <i className="fa-regular fa-envelope fa-2xl" style={{ color: "#ffffff" }}></i>
                </a>
            )}
        </div>
    </div>
);

export default ProfileCard;
