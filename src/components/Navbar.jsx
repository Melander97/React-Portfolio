export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 ">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="text-white text-lg font-bold">My Portfolio</div>
        <ul className="flex space-x-4 text-white ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
