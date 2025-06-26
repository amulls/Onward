import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="fixed top-7 left-0 w-full h-20 p-10 bg-white shadow-md z-[1000] flex items-center transition-all duration-500">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between w-full md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">ONWARD</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full w-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 hover:scale-105">
            <Image src="/age-group.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">ONWARD</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/list?cat=all-products" className="hover:scale-105">Shop All</Link>
            <Link href="/" className="hover:scale-105">About</Link>
          </div>
          <div className="flex hover:scale-105 xl:hidden">
            <Link href="/list?cat=all-products" className="hover:scale-105">
              <img src="/shop-now.png" alt="shop" width={65} height={55}/>
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-8">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
