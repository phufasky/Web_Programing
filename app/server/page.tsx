'use client'
const style = `border-black border-2 p-1 m-1`
import createMessage from "./_action/createMassage"
import { useFormState, useFormStatus } from "react-dom"
import {z} from 'zod'

export default function Server() {
    const [state, action] = useFormState(createMessage, "Init state")
    const {pending} = useFormStatus()

    return (
        <div>
            <h1>Result:</h1>
            <div>
                {state}
            </div>
            <h1>Server Form</h1>
            <form action={action}>
                <div>
                    <label 
                        htmlFor="message">Message </label>
                    <input
                        className="border-black border-2 p-1 m-1 text-black"
                        type="text" name="message" />
                    
                </div>
                <div>
                    <label 
                        htmlFor="email">Email </label>
                    <input
                        className="border-black border-2 p-1 m-1 text-black"
                        type="text" name="email" />
                    
                </div>
                <button
                    disabled={pending}
                    type="submit"
                    className={style}
                >Submit{pending && "..."}</button>
            </form>

        </div>
    )
}