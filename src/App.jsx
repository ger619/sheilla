import Banner from './Components/Banner.jsx';
import Header from './Components/Header.jsx';
import Nav from './Components/Nav.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Work from './Components/Work.jsx';
import Contact from './Components/Contact.jsx';

const App = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Banner />
            <Nav />
            <About />
            <Services />
            <Work />
            <Contact />
            <div className='h-[4000px]'></div>
        </div>
    );
};

export default App;
