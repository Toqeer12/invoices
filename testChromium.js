import chromium from "@sparticuz/chromium";

(async () => {
  try {
    const path = await chromium.executablePath();
    console.log("Chromium Executable Path:", path);
  } catch (error) {
    console.error("Error getting Chromium path:", error);
  }
})();
