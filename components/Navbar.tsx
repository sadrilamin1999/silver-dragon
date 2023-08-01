import Link from "next/link";
import ExploreBtn from "./ExploreBtn";

const Navbar = () => {
  return (
    <header className=" h-20 fixed top-0 left-0 right-0 backdrop-blur-lg border-b border-light/10">
      <div className="wrapper w-full h-full flex justify-between items-center">
        {/* Nav left */}
        <nav>
          <Link href="/" className=" text-2xl font-semibold text-slate-300">
            Silver <span className="  ">Dragon</span>
          </Link>
        </nav>
        {/* Nav right */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/instructors" className="link-item">
                Instructors
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="link-item">
                Gallery
              </Link>
            </li>
            <ExploreBtn />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
