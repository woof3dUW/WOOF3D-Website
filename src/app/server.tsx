"use server";

import { del } from "@vercel/blob";

// Deletes an array of blobs in Vercel Blob storage at the URLs in the urls parameter.
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