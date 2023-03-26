import { Router } from 'next/router'
import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter()
    console.log(  router.query.slug)
    
    return (
        <div>
            
    </div>
  )
}

export default slug
