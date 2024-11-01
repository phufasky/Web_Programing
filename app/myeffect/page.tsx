'use client'

import { useState } from "react"


export default function MyEffect() {
    const (a, setA) = useState('A')
    const (b, setB) = useState('B')
    return(<>
        <div>
            UseEffect: {a} |
        </div>
    </>
    )
}