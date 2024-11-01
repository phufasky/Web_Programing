'use server'
export default async function createMassage(previous: unknown,formData: FormData){
    const message =  formData.get("message")
    const email = formData.get("email")
    console.log("Message: ", message)
    return `Message: ${message} Email:${email}`
}

const wait =async (delay:number) => 
    setTimeout( ()=>console.log(`Wait for ${delay} section`),delay)