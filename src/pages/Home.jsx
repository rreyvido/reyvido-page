import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>I'm Reyvido Yoga</h2>
                <div className='prompt'>
                    <p>
                        A software developer with a passion for learning.
                    </p>
                    <LinkedInIcon />
                    <EmailIcon />
                    <GithubIcon />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front End</h2>
                        <span>ReactJS, Redux, NextJS, HTML, CSS, React Native, TailwindCSS</span>
                    </li>
                    <li className='item'>
                        <h2>Back End</h2>
                        <span>NodeJS, ExpressJS, MongoDB, Flask</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>JavaScript, Python, TypeScript</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home