'use server'

import prisma from "@/db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const createHotel = async (data: FormData) => {
    const schema = z.object({
        imgID: z.string(),
        name: z.string(),
        location: z.string(),
        description: z.string(),
        price: z.string().transform(str => parseFloat(str) || 0)
    });

    const parsedData = schema.parse({
        imgID: data.get("img"),
        name: data.get("name"),
        location: data.get("location"),
        description: data.get("description"),
        price: data.get("price")
    });

    console.log(parsedData.imgID, parsedData.name, parsedData.location, parsedData.description, parsedData.price);

    // store hotels to prisma
    const hotel = await prisma.hotel.create({
        data: {
            imgID: parsedData.imgID,
            name: parsedData.name,
            location: parsedData.location,
            description: parsedData.description,
            price: parsedData.price,
        },
    });

    // return the hotel
    redirect("/admin/products");
    return hotel;
};