'use server'

import prisma from "@/db"

export async function registerUser(){
    const getUser = await prisma.user.findUnique({
        where: {
            id: 'a'
        }
    })

    if(!getUser){
        console.log('user not found')
    }else{
        console.log('user found')
    }

    console.log('registerUser')
}