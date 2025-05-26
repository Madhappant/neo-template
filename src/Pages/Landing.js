import React from "react";
import Navbar from "../Components/Navbar";
import Heading from "./Heading";
import Hero from "./Hero";
import Info from "./Info";
import Content from "./Content";
import Gallery from "./Gallery";
import Allinone from "./Allinone";
import Footer from "../Components/Footer";

function Landing(){
    return(
        <div>
            <Navbar/>
            <Heading/>
            <Hero/>
            <Info/>
            <Content/>
            <Gallery/>
            <Allinone/>
            <Footer/>
        </div>
    )
}
export default Landing;