export async function shortenUrlCleanURI(url: string): Promise<string | null> {
  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ url: url }).toString()
    });

    if (!response.ok) {
      throw new Error("Failed to shorten URL");
    }
    const data = await response.json();
    console.log(data.result_url ?? null)
    return data.result_url ?? null;
  } catch (error) {
        console.error("Fetch error:", error);
    return null;
  }
}