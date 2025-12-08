# Smart Inbox Engine - Assessment Starter

This is a starter template for the Smart Inbox Engine technical challenge. The project includes a .NET Web API backend and a vanilla JavaScript frontend.

## Project Structure

```
.
├── server/          # .NET Web API backend
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   └── Program.cs
├── client/          # JavaScript frontend
│   └── index.html
└── README.md
```

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download) (or .NET 6/7)
- A modern web browser
- A simple HTTP server (or use VS Code Live Server extension)

## Setup Instructions

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Restore dependencies and run the application:
   ```bash
   dotnet restore
   dotnet run
   ```

3. The API will be available at:
   - HTTP: `http://localhost:5000`
   - HTTPS: `https://localhost:5001`
   - Swagger UI: `http://localhost:5000/swagger`

### 2. Frontend Setup

You have several options to run the frontend:

**Option A: Using VS Code Live Server**
1. Install the "Live Server" extension in VS Code
2. Right-click on `client/index.html`
3. Select "Open with Live Server"
4. The page will open at `http://127.0.0.1:5500` (or similar)

**Option B: Using Python HTTP Server**
```bash
cd client
python3 -m http.server 3000
# Then open http://localhost:3000 in your browser
```

**Option C: Using Node.js http-server**
```bash
npx http-server client -p 3000
# Then open http://localhost:3000 in your browser
```

### 3. Testing the Application

1. Make sure both the backend and frontend are running
2. Open the frontend in your browser
3. Click the "Load & Sort Emails" button
4. You should see the emails sorted by priority score with color coding:
   - **Red background**: High priority (score > 70)
   - **Green background**: Low priority (score < 30)
   - **White background**: Medium priority (30-70)

## API Endpoint

### POST `/api/inbox/sort`

**Request Body:**
```json
[
  {
    "sender": "boss@company.com",
    "subject": "URGENT: Production DB Down",
    "body": "Please fix this immediately.",
    "receivedAt": "2023-10-27T10:00:00Z",
    "isVIP": true
  }
]
```

**Response:**
```json
[
  {
    "sender": "boss@company.com",
    "subject": "URGENT: Production DB Down",
    "body": "Please fix this immediately.",
    "receivedAt": "2023-10-27T10:00:00Z",
    "isVIP": true,
    "priorityScore": 95
  }
]
```

## Scoring Rules

- **VIP Status**: +50 points if `IsVIP` is true
- **Urgency Keywords**: +30 points if Subject contains "Urgent", "ASAP", or "Error" (case-insensitive)
- **Time Decay**: +1 point for every hour passed since `ReceivedAt`
- **Spam Filter**: -20 points if Body contains "Unsubscribe" or "Newsletter"
- **Clamping**: Final score is clamped between 0 and 100

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console, make sure:
1. The backend is running
2. The frontend URL matches one of the allowed origins in `Program.cs`:
   - `http://localhost:3000`
   - `http://127.0.0.1:5500`
   - `http://localhost:5500`

If your frontend runs on a different port, update the CORS configuration in `server/Program.cs`.

### Backend Not Starting

- Ensure you have .NET 8 SDK installed: `dotnet --version`
- Try cleaning and rebuilding: `dotnet clean && dotnet build`

### Frontend Can't Connect

- Verify the backend is running on `http://localhost:5000`
- Check the browser console for error messages
- Ensure the API_URL in `index.html` matches your backend URL

## Running Tests

Unit tests are located in `server/Tests/`. To run the tests:

```bash
cd server/Tests
dotnet test
```

**Important:** The test file `PriorityScoringServiceTests.cs` contains placeholder tests that need to be implemented. See `ASSESSMENT_GUIDE.md` for detailed instructions on implementing the tests.

## Next Steps

This starter code provides a working foundation. You can now:
- Review the code structure
- Test the functionality
- **Implement the unit tests** (required for submission)
- Make improvements or modifications as needed

Good luck! 🚀
