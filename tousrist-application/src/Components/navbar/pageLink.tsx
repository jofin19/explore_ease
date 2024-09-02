import { Link } from 'react-router-dom';
import { SelectedPage } from '@/Shared/types';

type Props = {
  page: string;
  selectPage: SelectedPage;
  setSelectPage: (value: SelectedPage) => void;
};

const PageLink = ({ page, selectPage, setSelectPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "-");

  // If the page is "Home", link to the root path "/"
  const path = lowerCasePage === "home" ? "/" : `/${lowerCasePage}`;

  return (
    <Link 
    to={path} 
    className={`${
      selectPage === lowerCasePage ? "text-primary-500" : ""
    } transition duration-300 hover:text-primary-300`}
    onClick={() => setSelectPage(lowerCasePage as SelectedPage)}
  >
    {page}
  </Link>
  );
};

export default PageLink;
