// "use server";

import { del } from "@vercel/blob";

// deletes a blob in Verce Blob storage at the given URL
export async function deleteBlob(url: string) {
    try {
        await del(url, {token: process.env.BLOB_READ_WRITE_TOKEN});
    } catch (error) {
        return error;
    }
}