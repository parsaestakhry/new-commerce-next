"use server"
import { cookies } from "next/headers"

export const getCookie = (cookie : string) => {
    const hello = cookies();
    const cooks = hello.set('cookie' , )
    return cooks
}