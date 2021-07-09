import React, { useEffect, useState } from 'react';
import ShowInfo from '../ShowInfo/ShowInfo';
import './Home.css';
const Home = () => {
    const [infos, setInfos] = useState([]);
    useEffect((()=>{
        const URL = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(URL)
        .then(res => res.json())
        .then(data => setInfos(data.teams))
    }), [])
    return (
        <div>
            <div className="cover-div">
                 <h1>Club Info</h1>  
            </div>
            <div className="second-div">
                {
                    infos.map(info => <ShowInfo info={info} key = {info.idAPIfootball}></ShowInfo>)
                }
            </div>
        </div>
    );
};

export default Home;