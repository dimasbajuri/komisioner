import React from 'react';
import { Link } from 'react-router-dom';

const navMenu = [
    { id: "1", name: "Home", link: "/" },
    { id: "2", name: "Category", link: "/category" },
    { id: "3", name: "Bantuan", link: "/help" },
    { id: "4", name: "Profil", link: "/profile" },
];

const Navbar = () => {
    const [navButtonActive, setNavButtonActive] = React.useState(false);

    return (
        <nav className="fixed inset-x-0 top-0 bg-pink-500 shadow-md z-50">
            <div className='container flex items-center justify-between py-4 px-7 box-border relative inset-x-0 min-w-full'>
                <div>
                    <Link to="/" className='text-slate-50 text-2xl font-semibold uppercase'>Gractesz</Link>
                </div>
                <div className='flex'>
                    <button className='flex items-center flex-col gap-1 lg:hidden' onClick={() => setNavButtonActive(!navButtonActive)}>
                        <span className={`w-6 h-1 bg-slate-50 rounded-md transition-all origin-top-left ${navButtonActive ? 'rotate-45' : ''}`}></span>
                        <span className={`w-6 h-1 bg-slate-50 rounded-md transition-all ${navButtonActive ? 'scale-0' : ''}`}></span>
                        <span className={`w-6 h-1 bg-slate-50 rounded-md transition-all origin-bottom-left ${navButtonActive ? '-rotate-45' : ''}`}></span>
                    </button>
                    <div className={`${navButtonActive ? 'h-[303%]' : 'h-[0%] '} bg-pink-500 absolute flex-col right-0 top-full inset-x-0 flex  overflow-hidden transition-all duration-300 lg:h-auto lg:flex-row lg:relative lg:gap-x-3`}>
                        {navMenu.map((menu) => (
                            <Link
                                key={menu.id}
                                to={menu.link}
                                className="py-3 px-4 text-slate-50 hover:bg-slate-50 hover:text-pink-500 duration-300 text-right"
                            >
                                {menu.name} 
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
