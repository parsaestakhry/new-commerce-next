import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
export const SearchBox = () => {
  return (
    <div className="flex">
      {/* for larger displays */}
      <div className="sm:flex hidden">
        <label className="input input-bordered sm:flex items-center gap-3 bg-black ">
          <input type="text" className="grow " placeholder="Search" />
        </label>
      </div>
      {/* for small displays */}
      <div className="sm:hidden">
        <label className="input input-bordered flex items-center gap-2 w-36  h-10 mt-1 bg-black bg-resolution-blue-50">
          <input type="text" className="grow text-sm" placeholder="Search" />
        </label>
      </div>
      <div className="btn btn-ghost btn-circle ml-2">
        <MagnifyingGlass size={28} color="#d6d6d6" />
      </div>
    </div>
  );
};
