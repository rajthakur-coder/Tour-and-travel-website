import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assest/2.jpg";
import Footer from "../component/Footer";
import ContactFrom from "../component/ContactFrom";
function Contact (){
    return(
        <>
         <Navbar/>
         <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactFrom/>
         <Footer/>
        </>
    )
    }
    
    export default Contact;