import { appleImg, searchImg, bagImg } from "../../utils";
import { navLists } from "../../constants";
import Image from "next/image";

const NavBar = () => {
    return (
        <header className="nav-st py-5">
            <nav className="flex w-full scrim-max-width justify-between items-center">
                <Image src={appleImg} alt="apple" width={14} height={18} />

                <div className="flex flex-1 justify-center items-center max-sm:hidden">
                    {navLists.map((item, index) => (
                        <div className="navLink" key={index}>{item}</div>
                    ))}
                </div>

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <Image src={searchImg} alt="search" width={18} height={18} />
                    <Image src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;