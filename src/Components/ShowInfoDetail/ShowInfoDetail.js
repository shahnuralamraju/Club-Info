import React from 'react';
import "./ShowInfoDetail.css";
import Twitter from "../../Images/Twitter.png";
import Youtube from "../../Images/YouTube.png";
import Website from "../../Images/Website.png";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';

const ShowInfoDetail = () => {
    const { idTeam } = useParams();
    const [clubInfos, setClubInfos] = useState({})
    useEffect(() => {
        const URL = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(URL)
            .then(res => res.json())
            .then(data => setClubInfos(data.teams[0]))
    }, [idTeam])

    const { strTeamBadge,
        strAlternate,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strTeamFanart3,
        strDescriptionEN,
        strStadiumDescription,
        strTeamJersey,
        strTwitter,
        strYoutube,
        strWebsite
    } = clubInfos;

    const [isHide, setIsHide] = useState(true);
    const Jersey = "Jersey";
    const Team = "Team";

    return (
        <div className="main-container">
            <div className="cover-div">
                <img src={strTeamBadge} alt="Team Badge" />
            </div>
            <div className="share-container">
                <div className="detail-container">
                    <h1>{strAlternate}</h1>
                    <h5><FontAwesomeIcon className="mr-2" icon={faMapMarkerAlt} />Founded: In the Year of {intFormedYear}</h5>
                    <h5><FontAwesomeIcon className="mr-2" icon={faFlag} />Country: {strCountry}</h5>
                    <h5><FontAwesomeIcon className="mr-2" icon={faFutbol} />Sport Type: {strSport}</h5>
                    <h5><FontAwesomeIcon className="mr-2" icon={faMars} /> Gender: {strGender}</h5>
                    <button onClick={() => setIsHide(!isHide)}
                        className="btn btn-primary">See {isHide ? Jersey : Team}
                        <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                    </button>
                </div>
                <div className="img-container">
                    {
                        isHide ? <img src={strTeamFanart3} alt="Team" /> : <img src={strTeamJersey} alt="Jersey" />
                    }
                </div>
            </div>
            <div className="description">
                <p>{strDescriptionEN}</p><br />
                <p>{strStadiumDescription}</p><br />

            </div>
            <div className="social-icon">
                <a href={strTwitter}><img src={Twitter} alt="" /></a>
                <a href={strYoutube}><img src={Youtube} alt="" /></a>
                <a href={strWebsite}><img src={Website} alt="" /></a>

            </div>
            <a href="/"><h6 className="text-center mb-4">Home</h6></a>

        </div>
    );
};

export default ShowInfoDetail;