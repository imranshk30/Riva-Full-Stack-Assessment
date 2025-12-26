import React, { useState } from "react";
import { sortEmails } from "./api/inboxApi";

function App() {
  const [emails, setEmails] = useState([
    {
      sender: "Riva@company.com",
      subject: "URGENT: Production Server Down",
      body: "Please fix this asap.",
      receivedAt: "2023-10-27T10:00:00Z",
      isVIP: true
    },
    {
      sender: "Mohammad@store.com",
      subject: "Weekly Newsletter",
      body: "Click here to unsubscribe.",
      receivedAt: "2023-10-27T09:00:00Z",
      isVIP: false
    },
  
  ]);

  const [sortedEmails, setSortedEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSort = async () => {
    setLoading(true);
    try {
      const result = await sortEmails(emails);
      setSortedEmails(result);
    } catch (error) {
      console.error(error);
      alert("Error sorting emails. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Smart Inbox Engine</h1>
      <p>Click the button below to send emails to the backend and get sorted results.</p>

      <button onClick={handleSort} disabled={loading} style={{ marginBottom: 20 }}>
        {loading ? "Sorting..." : "Sort Emails"}
      </button>

      <h2>Sorted Emails</h2>
      {sortedEmails.length === 0 && <p>No sorted emails yet.</p>}

      {sortedEmails.map((email, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 10,
            borderRadius: 4,
            background:
              email.priorityScore >= 70
                ? "#ffe5e5" // high priority
                : email.priorityScore <= 30
                ? "#e5f7ff" // low priority
                : "#ffffff"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{email.subject}</strong>
            <span>Score: {email.priorityScore}</span>
          </div>
          <p style={{ margin: "4px 0" }}>From: {email.sender}</p>
          <p style={{ margin: "4px 0" }}>{email.body}</p>
          <small>Received: {email.receivedAt}</small>
          {email.isVIP && (
            <div>
              <small style={{ color: "darkred", fontWeight: "bold" }}>VIP</small>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;