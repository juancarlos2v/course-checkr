import React from 'react'
import { useRouter } from 'next/router'

const Perfil = () => {
    const router = useRouter();
    const { id } = router.query
    return (
        <div>
            Perfil {id}
        </div>
    )
}

export default Perfil
