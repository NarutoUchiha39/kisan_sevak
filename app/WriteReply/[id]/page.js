import BootstrapwriteReply from '@/components/BootstrapwriteReply'
import React from 'react'

function page() {
  const { data: session } = useSession()
  const router = useRouter()
  if(session){
  return (
    
    <>
      <div>
        <BootstrapwriteReply/>
      </div>
    </>
  )
  }

  else
  {
    router.push('/')
  }
}

export default page