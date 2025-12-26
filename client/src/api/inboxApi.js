const API_BASE = "http://localhost:5062/api/inbox";

export async function sortEmails(emails) {
    const response = await fetch(`${API_BASE}/sort`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emails)
    });

    if (!response.ok) {
        throw new Error("Failed to sort emails");
    }

    return response.json();
}