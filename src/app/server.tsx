"use server";

import { del } from "@vercel/blob";

// deletes a blob in Verce Blob storage at the given URL
export async function deleteBlob(urls: string[]) {
    try {
        if (!process.env.BLOB_READ_WRITE_TOKEN) {
            throw new Error("BLOB_READ_WRITE_TOKEN could not be found");
        }
        await del(urls, {token: process.env.BLOB_READ_WRITE_TOKEN});
    } catch (error) {
        return error;
    }
}