import React from 'react';
import './home.css'
import { HeaderSocials } from './HeaderSocials';
import Me from '../../assets/avatar-1.svg';
import { ScrollDown } from './ScrollDown';
const Home = () => {
    return (
        <section className='home container' id = 'home'> 
            <div className='intro'>
                
                <img src={Me} alt='' className='home__img'/>
                <h1 className='home__name'>Yaroslav Gorban</h1>
                <span className='home__education'>I'm Full Stack Developer</span>
                <HeaderSocials/>
                <a href='#contact' className='btn'> Hire me</a>
                <ScrollDown/>

            </div>
        </section>
    )
}

export default Home;