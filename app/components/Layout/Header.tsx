import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import ScrollIntoView from '@app/components/ScrollIntoView/ScrollIntoView';
import testIds from '@app/utils/test-ids';
import logo from 'public/home/logo.png';
import Image from 'next/image';

const Header = () => (
  <>
    <header
      className="absolute md:fixed h-header bg-[#fff] z-40 w-full shadow-md"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="relative pl-4 md:pl-0 flex md:justify-center max-w-full-content mx-auto gap-8 h-header items-center">
        <Image // Use the Image component
          src={logo}
          alt="Logo"
          width={180}
          height={50}
        />
        <NavBar />
      </div>
    </header>
    <div className="h-header"></div>
    <ScrollIntoView hashName="#top" />
  </>
);

export default Header;
