import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Coverage from "./components/Coverage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalleryCarousel from "./components/Carousel";
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Services />
            <Coverage />
            <Contact />
            <GalleryCarousel />
            <Footer />
        </div>
    );
}

export default App;
