import React from 'react'
import { Link } from '@nextui-org/react';

import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub,FaGlobe } from "react-icons/fa";

const SocialNavBar = () => {
  return (
	<div className={`flex justify-center items-center gap-3`}>
		<Link href='#' className={`w-5 h-5 text-primary-900 hover:text-success-500 transition-all duration-300`}>
			<FaGithub className={`w-full h-full`} />
		</Link>
		<Link href='#' className={`w-5 h-5 text-primary-900 hover:text-success-500 transition-all duration-300`}>
			<IoLogoLinkedin className={`w-full h-full`} />
		</Link>
		<Link href='#' className={`w-5 h-5 text-primary-900 hover:text-success-500 transition-all duration-300`}>
			<FaGlobe className={`w-full h-full`} />
		</Link>
	</div>
  )
}

export default SocialNavBar