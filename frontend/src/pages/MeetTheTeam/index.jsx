import "./style.css";
import MenuBar from "../../components/MenuBar";
import ProfileCard from "../../components/ProfileCard";
import teamData from "../../data/teamData.js";
import { useEffect, useState } from "react";

const MeetTheTeam = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const [teamFilter, setTeamFilter] = useState("");
    const [filteredTeam, setFilteredTeam] = useState(teamData);

    useEffect(() => {
        // Role filter options
        const roleFilter = document.querySelector('.role-filter');
        // Clear existing options first
        roleFilter.innerHTML = '<option value="">Filter by Type</option>';
        
        const roleOptions = [
            "Current",
            "Alumni"
        ];
        
        roleOptions.forEach(role => {
            const option = document.createElement('option');
            option.value = role.toLowerCase().replace(' ', '-');
            option.textContent = role;
            roleFilter.appendChild(option);
        });

        // Team filter options
        const teamFilter = document.querySelector('.team-filter');
        // Clear existing options first
        teamFilter.innerHTML = '<option value="">Filter by Team</option>';
        
        const teamOptions = [
            "President", 
            "Technology",
            "Operations",
            "Marketing",
            "Corporate Relations",
            "First Year Representative"
        ];
        
        teamOptions.forEach(team => {
            const option = document.createElement('option');
            option.value = team.toLowerCase().replace(' ', '-');
            option.textContent = team;
            teamFilter.appendChild(option);
        });
    }, []);

    // Filter team data based on search term and filters
    useEffect(() => {
        let filtered = teamData;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(member =>
                member.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by type (Current/Alumni)
        if (roleFilter) {
            filtered = filtered.filter(member =>
                member.type.toLowerCase().includes(roleFilter.toLowerCase())
            );
        }

        // Filter by team (using role as team)
        if (teamFilter) {
            filtered = filtered.filter(member =>
                member.role.toLowerCase().includes(teamFilter.toLowerCase())
            );
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
                    <h2>Meet the 2024/2024 Presidents, the Vice-Presidents, the VP of Finance, the Internal Director, the Operations team, the Marketing team, the Corporate Relations team, and the First Year Representatives that make UBC eProjects come alive!</h2>
                    <div className="search-buttons">
                        <input 
                            type="text" 
                            placeholder="Search for Members" 
                            className="search-input"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <select 
                            className="filter-select role-filter"
                            value={roleFilter}
                            onChange={handleRoleFilterChange}
                        >
                            <option value="">Filter by Type</option>
                        </select>
                        <select 
                            className="filter-select team-filter"
                            value={teamFilter}
                            onChange={handleTeamFilterChange}
                        >
                            <option value="">Filter by Team</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="team-profiles">
                {filteredTeam.map((member, index) => (
                    <ProfileCard 
                        key={index}
                        name={member.name}
                        role={member.role}
                        desc={member.desc}
                        img={member.img}
                        linkedin={member.linkedin}
                        instagram={member.instagram}
                        email={member.email}
                    />
                ))}
            </div>
        </div>
    );
};

export default MeetTheTeam;

