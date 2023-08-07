import { fakeMenu } from 'src/shared/mock/menu';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PreImage } from '../../common/PreImage';
import logo from '../../../../../public/logo.svg';
import ThemeModeToggle from '../../common/ToggleThemeMode';
import LanguageSwitch from '../../common/LanguageSwitch';
import { HambugerMenu } from './HambugerMenu';
import { Sheet, SheetContent, SheetTrigger } from '../../common/ui/sheet';
import { Button } from '@/components/common/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <section
      className={`w-full top-0 z-50 flex justify-between items-center gap-5 px-5 md:px-10 transition ${isScrolled
        ? 'sticky text-white border-b-[1px] border-opacity-50 border-black-300 inset-0 bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out bg-[#000] h-[80px]'
        : 'fixed bg-transparent bg-opacity-100 duration-500 ease-in-out'
        }`}
    >
      <div className='flex justify-around items-center'>
        <PreImage height={100} width={100} src={logo} alt={'Logo'} layer={false} />
        <ul className='justify-center items-center gap-10 hidden lg:flex ml-10 text-white'>
          {fakeMenu.map((item, idx) => (
            <Link href={'#'} key={idx}>
              <li>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='absolute right-5 flex justify-center items-center gap-2'>
        <div
          id='dropdown'
          className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
        >
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefaultButton'>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Dashboard
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Settings
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Earnings
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Sign out
              </a>
            </li>
          </ul>
        </div>
        <div className='flex gap-8 items-center'>
          <div className='lg:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <div>
                  <Menu />
                </div>
              </SheetTrigger>
              <SheetContent className="w-[200px]" side={'left'}>
                <div>
                  {fakeMenu.map((item, idx) => (
                    <Link href={'#'} key={idx}>
                      <li>{item}</li>
                    </Link>
                  ))}

                </div>

              </SheetContent>
            </Sheet>
          </div>

          <ThemeModeToggle />
          <LanguageSwitch />
          <button className='text-white font-bold py-2 px-4 rounded cursor-pointer hidden lg:block'>Liên hệ</button>
        </div>
      </div>
      <div className='block md:hidden'>...</div>
    </section>
  );
};

export default Header;
