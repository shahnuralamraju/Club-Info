import React from 'react';
import { Link } from 'react-router-dom';
import './ShowInfo.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShowInfo = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.info;
    return (
        <div className='teamInfo-div'>
            <img src={strTeamBadge} alt="" />
            <h3>{strTeam}</h3>
            <h6>Sport Type: {strSport}</h6>
            <Link to={"/club/"+idTeam}>
            <button className="main-btn">
                Explore <FontAwesomeIcon className="ml-2" icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default ShowInfo;