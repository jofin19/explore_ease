import { useEffect, useState } from 'react';
import Navbar from '@/Components/navbar';
import { SelectedPage } from '@/Shared/types';
import HomePage from '@/Pages/HomePage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Destination from '@/Pages/Destination';
import Footer from '@/Components/navbar/Footer';
import CulturePage from '@/Pages/CulturePage';
import DestinationDetails from '@/Pages/DestinationDetails';
import TravelTips from '@/Pages/TravelTips';
import ContactPage from '@/Pages/ContactPage';

// This component handles scrolling to the top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]); // Effect runs when the pathname changes

  return null;
};

function App() {
  const [selectPage, setSelectPage] = useState<SelectedPage>(SelectedPage.Home);
  const [topOfPage, setTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    // Set scrollRestoration to manual to prevent automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
      } else {
        setTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      {/* Add ScrollToTop component to ensure pages load at the top */}
      <ScrollToTop />

      <div className="app bg-gray-20">
        <Navbar topOfPage={topOfPage} selectPage={selectPage} setSelectPage={setSelectPage} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/destinations' element={<Destination />} />
          <Route path='/cultural-experiences' element={<CulturePage />} />
          <Route path='/destination-details' element={<DestinationDetails />} />
          <Route path='/travel-tips' element={<TravelTips />} />
          <Route path='/contact-us' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
