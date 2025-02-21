import chromium from "@sparticuz/chromium";

export default async function handler(req, res) {
    try {
        const path = await chromium.executablePath();
        res.json({ executablePath: path });
    } catch (error) {
        res.json({ error: error.message });
    }
}
