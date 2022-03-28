import React from 'react'
import './Social.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
   
  } from "@fortawesome/free-brands-svg-icons";
import '../utils/useWindowSize.js'
import useWindowSize from '../utils/useWindowSize.js';

function Social() {
    const {width}=useWindowSize();
    return (
        <div>
            {width > 1300 && (
                <div className='slink'>
                <h1 className='text'>Dictionary Flutter Application Using Bloc</h1>
                <a href="https://github.com/shyamexe/Dictionary_app_flutter_using_bloc"
                    className="social-link">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            )}
            {width < 1300 && (
                <div className='logo'>
                <a href="https://github.com/shyamexe/Dictionary_app_flutter_using_bloc"
                    className="social-link">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            )}
        </div>
    )
}

export default Social