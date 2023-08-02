import Link from "next/link";

const ExploreBtn = () => {
  return (
    <div>
      <Link
        href="/"
        className="bg-accent2 px-6 py-3 border-gray-200 rounded-md hover:bg-accent2/80 duration-300 font-semibold tracking-wide"
      >
        Explore Now
      </Link>
    </div>
  );
};

export default ExploreBtn;
