import React from 'react';
import Featured from './featured/Featured';
import MatchesHome from './matches/MatchesHome';
import Players from './players/Players';
import Promotion from './promotion/Promotion';

const Home = () => {
    return (
        <div style={{background : '#aa2930'}}>
            <Featured />
            <MatchesHome />
            <Players />
            <Promotion />
        </div>
    );
};

export default Home;