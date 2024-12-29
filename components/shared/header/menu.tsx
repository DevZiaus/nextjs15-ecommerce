import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
            <Link href='/signin' className='flex justify-center items-center header-button'>
                <UserIcon className='h-5 w-5' />
                <span>&nbsp;Hello, Sign In</span>
            </Link>
            <Link href='/cart' className='header-button'>
                <div className='flex items-end justify-center'>
                    <ShoppingCartIcon className='h-5 w-5' />
                    {/* <span>&nbsp;Cart</span> */}
                </div>
            </Link>
        </nav>
    </div>
  )
}

export default Menu;
