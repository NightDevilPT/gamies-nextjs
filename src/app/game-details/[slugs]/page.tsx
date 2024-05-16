import { ParamsObject } from '@/types/type'
import React from 'react'

const page = ({params}:ParamsObject) => {
	return (
	  <div className={`max-sm:px-5`}>
		  {params.slugs}
	  </div>
	)
  }

export default page