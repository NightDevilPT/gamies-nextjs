import BannerFrame from '@/components/ui/BannerFrame'
import CategoryLayout from '@/components/ui/CategoryLayout'
import { ParamsObject } from '@/types/type'
import React from 'react'

const page = ({params}:ParamsObject) => {
  return (
	<div className={`max-sm:px-5`}>
		<BannerFrame />
		<CategoryLayout title={params.slugs} />
	</div>
  )
}

export default page