import React from 'react';
import './NotFound.css';
import NOTPic from '../../Images/404.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const NotFound = () => {
    return (
        <div className="notfound-div">
            <h1>Oooopppps....Page Not Found</h1>
            <img src={NOTPic} alt="" />
            <button className="btn btn-outline-primary">
                <a href="/">BACK TO HOME</a>
                <FontAwesomeIcon className="ml-2 text-light" icon={faArrowRight}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default NotFound;