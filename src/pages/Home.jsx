import React from 'react';
import { useState } from 'react';
import componentsMap from '../data/componentList';

const Home = () => {
    const [selectedLetter, setSelectedLetter] = useState('A');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');    

    const tabWrapperHandler = (e) => {
        console.log(e.target.textContent);
        if(e.target.classList.contains('tabCards')){
            setSelectedLetter(e.target.textContent);
        }
    }    

    return(
        <>
            <h1>A to Z React Components</h1>
            <div className='tabWrapper' onClick={tabWrapperHandler}>
                {alphabet.map((letter,i)=>{
                    return(
                        <div className={`tabCards ${letter === selectedLetter && 'activeTab'}`} key={i}>{letter}</div>
                    );
                })}
            </div>
            <div>
                {componentsMap[selectedLetter] && componentsMap[selectedLetter].map((item, i)=> {
                    return(
                        <div className='tabContentCard' key={i}>{item}</div>
                    );
                })}
            </div>
        </>
    );
}

export default Home;