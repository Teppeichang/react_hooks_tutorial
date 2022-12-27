import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-black bottom-0">
      <div className="flex justify-center items-center text-white p-5 w-screen">
        ©Copyright Teppei Torii 2022 All Rights Reserved
        <a href="https://github.com/Teppeichang/react_hooks_tutorial" className="ml-5"><FaGithub /></a>
        <a href="https://www.instagram.com/the_teppei/" className="ml-2"><FaInstagram /></a>
      </div>
    </div>
  )
}

export default Footer
