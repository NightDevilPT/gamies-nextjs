import React from 'react'
import LogoFrame from '../Navbar/NavBarLogo'
import LoaderFrame from '@/components/common/LoaderFrame'

const LoadingBoundry = () => {
  return (
	<div className={`w-full min-h-48 absolute left-0 top-0 flex justify-center items-center gap-5`}>
		<LogoFrame />
		<LoaderFrame />
	</div>
  )
}

export default LoadingBoundry