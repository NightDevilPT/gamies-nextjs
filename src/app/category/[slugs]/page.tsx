import CategoryLayout from '@/components/ui/CategoryLayout'
import { ParamsObject } from '@/types/type'
import React from 'react'

const page = ({params}:ParamsObject) => {
	console.log(params.slugs,'@@#####')
  return (
	<div className={`container space-y-5 mt-5 px-5`}>
		<CategoryLayout title={params.slugs} />
	</div>
  )
}

export default page