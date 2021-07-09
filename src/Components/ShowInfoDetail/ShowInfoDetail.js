import React from 'react';
import "./ShowInfoDetail.css";
// import Female from '../../Best-Female-Football-Teams.jpg'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

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
        strTeam,
        intFormedYear,
        strCountry,
        strSport,
        strGender,
        strTeamFanart3,
        strDescriptionEN,
        strStadiumDescription,
        strTeamJersey } = clubInfos;

    const [pic, setPic] = useState(true);
    const Female = "Female";
    const Male = "Male";
   
    return (
        <div>
            <div className="cover-div">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="contain">
                <div className="detail-container">
                    <h1>{strTeam}</h1>
                    <h5>Founded: {intFormedYear}</h5>
                    <h5>Country: {strCountry}</h5>
                    <h5>Sport Type: {strSport}</h5>
                    <h5>Gender: {strGender}</h5>
                    <button onClick={() => setPic(!pic)} className="btn btn-primary">See {pic ? Female : Male}</button>
                </div>
                <div className="img-container">
                    {
                        pic ? <img src={strTeamFanart3} alt="" /> : <img src={strTeamJersey} alt="" />
                    }
                </div>
            </div>
            <div className="description">
                <p>{strDescriptionEN}</p><br />
                <p>{strStadiumDescription}</p><br />

            </div>
        </div>
    );
};

export default ShowInfoDetail;