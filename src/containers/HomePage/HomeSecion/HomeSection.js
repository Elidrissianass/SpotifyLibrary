import React from 'react'
import SideBar from "../../../components/SideBar/SideBar";
import PlaySection from './PlaySection/PlaySection';
import { HomeSecionStyle } from "./HomeSection.style";

const HomeSection = () => {
  return (
      <HomeSecionStyle>
      <SideBar />
      <PlaySection />
      </HomeSecionStyle>
  )
}

export default HomeSection
