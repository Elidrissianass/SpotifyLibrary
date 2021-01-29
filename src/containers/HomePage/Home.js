import React from 'react'
import HomeSection from "./HomeSecion/HomeSection";
import Player from "../../components/Player/Player";
import { HomeStyle } from "./Home.style";

const Home = () => {
    return (
        <div>
        <HomeStyle>
           <HomeSection />
           <Player />
        </HomeStyle>
        </div>
    )
}

export default Home;
