import "./style.css";
import MenuBar from "../../components/MenuBar";
import ProfileCard from "../../components/ProfileCard";
import teamData from "../../data/teamData.js";
import { useEffect, useState } from "react";
import { preloadImages } from "../../data/teamData.js";

const MeetTheTeam = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const [teamFilter, setTeamFilter] = useState("");
    const [filteredTeam, setFilteredTeam] = useState(teamData);

    useEffect(() => {
        document.title = "Meet The Team | UBC eProjects - 2025/26 Executive Team";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Meet the UBC eProjects 2025/26 executive team. Get to know the students leading entrepreneurship initiatives at the University of British Columbia.');
        }
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://ubceprojects.netlify.app/team');
        }
    }, []);

    useEffect(() => {
        preloadImages();
        // Role filter options
        const roleFilter = document.querySelector(".role-filter");
        // Clear existing options first
        roleFilter.innerHTML = '<option value="">Filter by Type</option>';

        const roleOptions = ["Current", "Alumni"];

        roleOptions.forEach((role) => {
            const option = document.createElement("option");
            option.value = role.toLowerCase().replace(" ", "-");
            option.textContent = role;
            roleFilter.appendChild(option);
        });

        // Team filter options
        const teamFilter = document.querySelector(".team-filter");
        // Clear existing options first
        teamFilter.innerHTML = '<option value="">Filter by Team</option>';

        const teamOptions = ["Presidential", "Finance", "Technology", "Operations", "Marketing", "Corporate Relations", "Internal"];

        teamOptions.forEach((team) => {
            const option = document.createElement("option");
            option.value = team.toLowerCase().replace(" ", "-");
            option.textContent = team;
            teamFilter.appendChild(option);
        });
    }, []);

    // Filter team data based on search term and filters
    useEffect(() => {
        let filtered = teamData;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter((member) => member.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        // Filter by type (Current/Alumni)
        if (roleFilter) {
            filtered = filtered.filter((member) => member.type.toLowerCase().includes(roleFilter.toLowerCase()));
        }

        // Filter by team based on role
        if (teamFilter) {
            filtered = filtered.filter((member) => {
                const role = member.role.toLowerCase();
                const team = teamFilter.toLowerCase();

                // Presidential team
                if (team === "presidential") {
                    return role.includes("president") || role.includes("vice president");
                }
                // Finance team
                else if (team === "finance") {
                    return role.includes("finance") || role.includes("vp finance");
                }
                // Technology team
                else if (team === "technology") {
                    return role.includes("technology") || role.includes("tech");
                }
                // Operations team
                else if (team === "operations") {
                    return role.includes("operations");
                }
                // Marketing team
                else if (team === "marketing") {
                    return role.includes("marketing") || role.includes("design") || role.includes("visual media");
                }
                // Corporate Relations team
                else if (team === "corporate-relations") {
                    return role.includes("corporate relations");
                }
                // Internal team
                else if (team === "internal") {
                    return role.includes("internal");
                }

                return false;
            });
        }

        setFilteredTeam(filtered);
    }, [searchTerm, roleFilter, teamFilter]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleRoleFilterChange = (e) => {
        setRoleFilter(e.target.value);
    };

    const handleTeamFilterChange = (e) => {
        setTeamFilter(e.target.value);
    };

    return (
        <div className="meet-container">
            <MenuBar />
            <div className="meet-heading">
                <div className="heading-content">
                    <h1>The Minds Behind eProjects</h1>
                    <h2>Meet the 2025/26 Team that makes UBC eProjects come alive!</h2>
                    <div className="search-buttons">
                        <input type="text" placeholder="Search for Members" className="search-input" name="search" value={searchTerm} onChange={handleSearchChange} />
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        <select className="filter-select role-filter" value={roleFilter} name="role" onChange={handleRoleFilterChange}>
                            <option value="">Filter by Type</option>
                        </select>
                        <select className="filter-select team-filter" value={teamFilter} name="team" onChange={handleTeamFilterChange}>
                            <option value="">Filter by Team</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="team-profiles">
                {filteredTeam.map((member, index) => (
                    <ProfileCard key={index} name={member.name} role={member.role} desc={member.desc} img={member.img} linkedin={member.linkedin} instagram={member.instagram} email={member.email} />
                ))}
            </div>
        </div>
    );
};

export default MeetTheTeam;
