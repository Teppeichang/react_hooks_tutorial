import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-black bottom-0">
      <div className="flex justify-center items-center text-white p-5 w-screen">
        ©Copyright Teppei Torii 2022 All Rights Reserved
        <Link to="https://github.com/Teppeichang" className="ml-5"><FaGithub /></Link>
        <Link to="https://www.instagram.com/the_teppei/" className="ml-2"><FaInstagram /></Link>
      </div>
    </div>
  )
}

export default Footer
