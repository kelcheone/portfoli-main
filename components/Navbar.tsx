import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, setActiveItem, route }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className="hover:text-green">
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("About");
    } else if (pathname === "/projects") {
      setActiveItem("Projects");
    } else if (pathname === "/resume") {
      setActiveItem("Resume");
    }
  }, []);

  return (
    <div className="flex justify-between px-5 py-5 my-3">
      <span className="text-xl font-bold border-b-4 border-green text-green md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-10 text-lg ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />

        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
