import React from 'react';
import './seasonDisplay.css'
const seasonConfig = {
    summer:{
        text: 'let\'s hit the beach',
        iconName: 'sun icon'
    },
    winter:{
        text: 'Burr, it is chilly',
        iconName: 'snowflake icon'
    }
}
const getSeason = (lat, month) =>{
    if(month>2&&month<9){
        return lat > 0? 'summer': 'winter';
    }else{
        return lat < 0? 'summer': 'winter';
    }
}
const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    // const text = season==='winter'?'Burr, it is chilly':'lets hit the beach';
    // const icon = season ==='winter'?'snowflake':'sun';
return <div className={`season-display ${season}`}>
    <i className={`massive ${iconName} icon-left`}></i>
    <h1>{text} </h1>
    <i className={`massive ${iconName} icon-right`}></i>
    </div>;
}

export default SeasonDisplay;