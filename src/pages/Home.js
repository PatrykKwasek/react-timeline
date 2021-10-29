import React from "react";

import { Timeline } from "../components/Timeline/Timeline";

import './Home.scss';

export const Home = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h2>Github Timeline</h2>
      </header>

      <Timeline />
    </div>
  )
}