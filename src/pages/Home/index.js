import React from 'react'
import Header from '../../component/Header'
import Search from '../../component/Search'
import HeroSection from '../../component/HeroSection'
import TextContainer from '../../component/TextContainer'
import PropertySection from '../../component/PropertySection'
import CacularSection from '../../component/CacularSection'
import AbroadSection from '../../component/AbroadSection'
import FeartureSection from '../../component/FeartureSection'
import ColumnSection from '../../component/ColumnSection'
import FooterWidget from '../../component/FooterWidget'
import TestimonialsSection from '../../component/TestimonialsSection'
import FooterSection from '../../component/FooterSection'
import Login from '../register/Login/Login'



export default function index() {
    const token = localStorage.getItem('token');
   
    return (
        <div>
          {token===null?(<Login/>):( <div> <Header></Header>
                <Search></Search>
                <HeroSection></HeroSection>
                <TextContainer></TextContainer>
                <PropertySection></PropertySection>
                <CacularSection></CacularSection>
                <AbroadSection></AbroadSection>
                <FeartureSection></FeartureSection>
                <ColumnSection></ColumnSection>
                <FooterWidget></FooterWidget>
                <TestimonialsSection></TestimonialsSection>
                <FooterSection></FooterSection></div> )}
               
            </div>
    )
}

