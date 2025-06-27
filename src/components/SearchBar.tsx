"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
impore {useState} from "react";

const SearchBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name){
      router.push(`/list?name=${name}`)
    }
  };

  return (
    <div className="relative flex items-center">
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="transition-transform hover:scale-110 cursor-pointer">
          <img src="/search.png" alt="Search" width={20} height={20} />
        </button>
      )}

      <div
        className={`absolute border border-black rounded-2xl p-2 flex items-center gap-2 shadow transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100 2xl:translate-x-[-40rem] xl:translate-x-[-40rem] lg:translate-x-[-40rem] md:translate-x-[-25rem]" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <form onSubmit={handleSearch} className="flex items-center w-full xl:gap-80 lg:gap-60 md:gap-40">
          <input
            type="text"
            name="name"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
          <button type="submit">
            <img src="/search.png" alt="Submit" width={16} height={16} />
          </button>
        </form>
        <button type="button" onClick={() => setIsOpen(false)} className="text-sm hover:text-red-500">
          ✕
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
