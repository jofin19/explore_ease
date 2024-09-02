import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import PageLink from './pageLink';
import { SelectedPage } from '@/Shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import Logo from '@/assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  topOfPage: boolean;
  selectPage: SelectedPage;
  setSelectPage: (value: SelectedPage) => void;
};

const Navbar = ({ topOfPage, selectPage, setSelectPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMedium = useMediaQuery("(min-width:1060px)");
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const navbarStick = topOfPage ? "" : "bg-primary-100 drop-shadow-xl";

  const navigate = useNavigate();

  const handleContactClick = () => {
    setSelectPage(SelectedPage.ContactUs);
    navigate('/contact-us');
  };

  return (
    <nav className="z-50">
      <div className={`${navbarStick} ${flexBetween} fixed top-0 z-30 w-full py-6 bg-white`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Logo */}
            <Link to='/'>
              <img src={Logo} alt='logo' className="w-20 h-20" />
            </Link>
            
            {/* Main Navigation */}
            {isAboveMedium ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <PageLink page='Home' selectPage={selectPage} setSelectPage={setSelectPage} />
                  <PageLink page='Destinations' selectPage={selectPage} setSelectPage={setSelectPage} />
                  <PageLink page='Cultural Experiences' selectPage={selectPage} setSelectPage={setSelectPage} />
                  <PageLink page='Travel Tips' selectPage={selectPage} setSelectPage={setSelectPage} />
                </div>
                
                {/* Contact Us Button */}
                <div>
                  <button 
                    className="rounded-full bg-secondary-500 px-4 py-2 text-white hover:bg-primary-500 transition-colors duration-300"
                    onClick={handleContactClick}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => setMenuOpened(!menuOpened)}
              >
                <Bars3Icon className='text-white w-6 h-6' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAboveMedium && menuOpened && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl flex flex-col justify-between'>
          <div className='flex justify-end p-6'>
            <button onClick={() => setMenuOpened(!menuOpened)}>
              <XMarkIcon className='text-gray-400 w-6 h-6' />
            </button>
          </div>
          <div className="flex flex-col gap-10 text-2xl items-center">
            <PageLink page='Home' selectPage={selectPage} setSelectPage={setSelectPage} />
            <PageLink page='Destinations' selectPage={selectPage} setSelectPage={setSelectPage} />
            <PageLink page='Cultural Experiences' selectPage={selectPage} setSelectPage={setSelectPage} />
            <PageLink page='Travel Tips' selectPage={selectPage} setSelectPage={setSelectPage} />
          </div>
          <div className="p-6">
            <button 
              className="w-full rounded-full bg-secondary-500 px-4 py-2 text-white hover:bg-primary-500 transition-colors duration-300"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
