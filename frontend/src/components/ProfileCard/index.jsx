import "./style.css";

const ProfileCard = ({ name, role, desc, img, linkedin, instagram, email }) => (
    <div className="card">
        <div className={"cardOverlaySquare"}></div>
        <div className={"profilePic"}>{img && <img src={img} alt={name} className={"profileImg"} />}</div>
        <div className={"profileName"}>{name}</div>
        <div className={"profileRole"}>{role}</div>
        <div className={"profileDescription"}>{desc}</div>
        <div className="social-icons">
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none">
                        <path d="M22.2223 10.3704C24.4324 10.3704 26.552 11.1899 28.1148 12.6485C29.6776 14.1071 30.5556 16.0854 30.5556 18.1482V27.2223H25.0001V18.1482C25.0001 17.4606 24.7074 16.8012 24.1865 16.315C23.6655 15.8288 22.959 15.5556 22.2223 15.5556C21.4856 15.5556 20.779 15.8288 20.2581 16.315C19.7372 16.8012 19.4445 17.4606 19.4445 18.1482V27.2223H13.8889V18.1482C13.8889 16.0854 14.7669 14.1071 16.3297 12.6485C17.8925 11.1899 20.0121 10.3704 22.2223 10.3704Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.33339 11.6667H2.77783V27.2223H8.33339V11.6667Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.55561 7.77784C7.08973 7.77784 8.33339 6.61709 8.33339 5.18524C8.33339 3.75339 7.08973 2.59265 5.55561 2.59265C4.02149 2.59265 2.77783 3.75339 2.77783 5.18524C2.77783 6.61709 4.02149 7.77784 5.55561 7.77784Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            )}
            {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                        <path d="M22.1007 8.26164H22.1129M9.3403 3.15747H21.4931C24.849 3.15747 27.5695 5.6966 27.5695 8.82877V20.1714C27.5695 23.3035 24.849 25.8427 21.4931 25.8427H9.3403C5.98441 25.8427 3.26392 23.3035 3.26392 20.1714V8.82877C3.26392 5.6966 5.98441 3.15747 9.3403 3.15747ZM20.2778 13.7855C20.4278 14.7295 20.255 15.6935 19.7841 16.5406C19.3132 17.3877 18.5681 18.0746 17.6548 18.5036C16.7415 18.9327 15.7065 19.082 14.697 18.9304C13.6875 18.7788 12.7549 18.334 12.0319 17.6592C11.309 16.9844 10.8323 16.114 10.6699 15.1718C10.5075 14.2296 10.6675 13.2636 11.1272 12.4112C11.5869 11.5588 12.3228 10.8633 13.2304 10.4238C14.138 9.98428 15.1709 9.82305 16.1823 9.96303C17.214 10.1058 18.1691 10.5545 18.9066 11.2428C19.6441 11.9311 20.1248 12.8226 20.2778 13.7855Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                        <path d="M6.75 29.1666C5.89062 29.1666 5.14844 28.8871 4.52344 28.328C3.92448 27.7447 3.625 27.052 3.625 26.2499V8.74992C3.625 7.94784 3.92448 7.26728 4.52344 6.70825C5.14844 6.12492 5.89062 5.83325 6.75 5.83325H31.75C32.6094 5.83325 33.3385 6.12492 33.9375 6.70825C34.5625 7.26728 34.875 7.94784 34.875 8.74992V26.2499C34.875 27.052 34.5625 27.7447 33.9375 28.328C33.3385 28.8871 32.6094 29.1666 31.75 29.1666H6.75ZM19.25 18.9583L31.75 11.6666V8.74992L19.25 16.0416L6.75 8.74992V11.6666L19.25 18.9583Z" fill="white" />
                    </svg>
                </a>
            )}
        </div>
    </div>
);

export default ProfileCard;
