import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <header>
        <div className="flex flex-row justify-between py-12">
          <div className="text-xl text-emerald-400 font-bold tracking-wider">
            <a href="">Alyvazen</a>
          </div>
          <div className="flex flex-row items-center gap-10 text-xl text-white">
            <div>Home</div>
            <div>About</div>
            <div>Experience</div>
            <div>Skills</div>
            <div>Project</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Navbar };
