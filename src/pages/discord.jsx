// redirect piperider.io/discord -> https://discord.gg/b3HAykQPkn

import { useEffect } from 'react'

export default function DiscordPage() {
    useEffect(() => {
        window.location.assign('https://discord.gg/b3HAykQPkn')
    })
    return(
        <>
        </>
    )
}