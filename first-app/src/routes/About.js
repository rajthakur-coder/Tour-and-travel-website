import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assest/night.jpg";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";
function About (){
    return(
        <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    );
    }
    
    export default About;