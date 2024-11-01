// Task: print Image on you web site using avatar_url return by Github API
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function MyFetch() {

    const [url, setUrl] = useState('')
    const [data, setData] =useState('')
    useEffect(() => {
        async function getData() {
            const result = await fetch('https://api.vercel.app/blog')
            const data = await result.json()
            console.log("Data: ", data)
            setData('')
        }
 
    }, [])
 

    if (!data) return <>...loading!!</>

    return (<>Hi Fetch

        <hr />
        data.map((item)) =>
            <>{item.id} | {item.title}</>
        )
    </>)
}