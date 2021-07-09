import React from 'react';
import { Link } from 'react-router-dom';
import './ShowInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const ShowInfo = (props) => {
    console.log(props.info);
    const { strTeamBadge, strTeam, strSport, idTeam } = props.info;
    return (
        <div className='teamInfo-div'>
            <img src={strTeamBadge} alt="" />
            <h3>{strTeam}</h3>
            <h6>Sport Type: {strSport}</h6>
            <Link to={"/club/"+idTeam}>
            <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
            </Link>
        </div>
    );
};

export default ShowInfo;