import { FaDownload, FaFileDownload, FaGithub, FaPersonBooth } from "react-icons/fa";

export const Nav = () => {
  return (
    <>
      <nav className="flex justify-around p-4 items-center bg-gray-200 shadow-md hover:shadow-lg flex-wrap">
        <h1 className="font-mono cursor-pointer text-xl hover:scale-125 transition-transform">
          <a href="/">
           PSanchez
          </a>
        </h1>
        <div>
          <ul className="flex gap-5 align-middle justify-center">
            <a href="https://github.com/pablosanch423">
              <FaGithub className="text-2xl cursor-pointer hover:scale-125 transition-transform" />
            </a>
            <li className="cursor-pointer hover:scale-125 transition-transform">
              <div>
              <a className="flex items-center" href="/PablosResume.pdf" download="Pablo's Resume">
                  <span>resume</span>
                  <span>
                    <FaFileDownload />
                  </span>
                </a>
              </div>
            </li>
            <li className="cursor-pointer hover:scale-125 transition-transform">
              <a href="/Projects">
                projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
