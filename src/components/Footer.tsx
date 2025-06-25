import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">ONWARD</div>
          </Link>
          <p>
            245 Lincoln Avenue, Suite 300, New York, NY 10036
          </p>
          <span className="font-semibold">contact@onward.com</span>
          <span className="font-semibold">(555) 123-4567</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2 mb-20">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-4">
              <Link href="">Shop All</Link>
              <Link href="">Bundles</Link>
              <Link href="">Sale</Link>
              <Link href="">Gift Cards</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-4">
              <Link href="">Our Story</Link>
              <Link href="">Contact Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Blog</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Customer Service</h1>
            <div className="flex flex-col gap-4">
              <Link href="">FAQ/Link>
              <Link href="">Track My Order</Link>
              <Link href="">Shipping & Delivery</Link>
              <Link href="">Returns & Exchanges</Link>
              </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/visa.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
        <div>
          <div className="flex flex-col mb-12">Shipping to: United States | English</div>
            <div className="flex flex-col gap-8 md:flex-row">
              <Link href="">Terms of Use</Link>
              <Link href="">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-6">© 2025 ONWARD ALL RIGHTS RESERVED</div>
      </div>
  );
};

export default Footer;
