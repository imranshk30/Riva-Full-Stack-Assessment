# Technical Assessment: Smart Inbox Engine

## What is This Assessment?

This technical challenge evaluates your ability to build a full-stack application that helps users prioritize their emails. You'll be building a **Smart Inbox Engine** that:

- Accepts a stream of raw emails
- Calculates an **Urgency Score** for each email based on multiple factors
- Displays emails sorted by priority

The assessment tests your skills in:
- **.NET** backend development and business logic design
- **RESTful Web API** implementation
- **JavaScript** frontend development
- **Architecture** and code organization

## Getting the Code

To begin, clone the repository to your local machine:

```bash
git clone https://github.com/useHireUp/Riva-FrontEnd.git
```

## How to Start

### Prerequisites

Before you begin, make sure you have:
- [.NET 8 SDK](https://dotnet.microsoft.com/download) (or .NET 6/7) installed
- A modern web browser
- A code editor (VS Code, Visual Studio, or your preferred IDE)
- A simple HTTP server (or VS Code Live Server extension)

### Getting Started

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

3. **Restore dependencies and run the backend:**
   ```bash
   dotnet restore
   dotnet run
   ```
   The API will be available at `http://localhost:5000` (or `https://localhost:5001`)

4. **Set up the frontend:**
   
   **Option A: Using VS Code Live Server**
   - Install the "Live Server" extension in VS Code
   - Right-click on `client/index.html`
   - Select "Open with Live Server"
   
   **Option B: Using Python HTTP Server**
   ```bash
   cd client
   python3 -m http.server 3000
   ```
   Then open `http://localhost:3000` in your browser
   
   **Option C: Using Node.js http-server**
   ```bash
   npx http-server client -p 3000
   ```

5. **Test the application:**
   - Make sure both backend and frontend are running
   - Open the frontend in your browser
   - Click the "Load & Sort Emails" button
   - Verify that emails are sorted by priority score with appropriate color coding

### Project Structure

```
.
├── server/          # .NET Web API backend
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   ├── Tests/       # Unit tests (implement these!)
│   │   └── Services/
│   │       └── PriorityScoringServiceTests.cs
│   └── Program.cs
├── client/          # JavaScript frontend
│   └── index.html
└── assessment.md    # Detailed requirements
```

## Requirements Overview

### Backend Requirements (.NET)

- Create a `POST /api/inbox/sort` endpoint that accepts an array of email objects
- Implement priority scoring logic based on:
  - VIP Status: +50 points if `IsVIP` is true
  - Urgency Keywords: +30 points if Subject contains "Urgent", "ASAP", or "Error"
  - Time Decay: +1 point per hour since `ReceivedAt`
  - Spam Filter: -20 points if Body contains "Unsubscribe" or "Newsletter"
  - Clamping: Score must be between 0-100
- Use **Dependency Injection** and keep business logic separate from the Controller
- Configure CORS to allow frontend requests

### Frontend Requirements (JavaScript)

- Create a web interface that connects to the API
- Include mock data for testing
- Display sorted results showing Subject, Sender, and Priority Score
- Apply visual cues:
  - **Red background**: High priority (score > 70)
  - **Green background**: Low priority (score < 30)

For complete detailed requirements, please refer to `assessment.md` in the repository.

## Testing Requirements

As part of your submission, you are required to implement unit tests for the `PriorityScoringService`. Test files have been provided in `server/Tests/Services/PriorityScoringServiceTests.cs`.

### Running the Tests

To run the tests, navigate to the `server/Tests` directory and execute:

```bash
cd server/Tests
dotnet test
```

### Test Implementation

The test file contains placeholder tests with TODO comments. You need to:

1. **Implement all test methods** in `PriorityScoringServiceTests.cs`
2. **Remove the placeholder assertions** (`Assert.True(false, "Test not implemented")`)
3. **Ensure all tests pass** before submitting

The tests should cover:
- VIP Status scoring (+50 points)
- Urgency keyword detection (+30 points for "Urgent", "ASAP", "Error")
- Case-insensitive keyword matching
- Time decay calculation (+1 point per hour)
- Spam filter penalties (-20 points)
- Score clamping (0-100 range)
- Combined rule scenarios
- Edge cases (empty strings, very old emails, etc.)

### Test Structure

Each test follows the Arrange-Act-Assert pattern:
- **Arrange**: Set up test data (create Email objects)
- **Act**: Call the method being tested
- **Assert**: Verify the expected results

Example:
```csharp
[Fact]
public void CalculatePriorityScore_VIPEmail_Adds50Points()
{
    // Arrange
    var service = new PriorityScoringService();
    var email = new Email
    {
        Sender = "boss@company.com",
        Subject = "Test",
        Body = "Test body",
        ReceivedAt = DateTime.UtcNow,
        IsVIP = true
    };

    // Act
    var score = service.CalculatePriorityScore(email);

    // Assert
    Assert.Equal(50, score);
}
```

## Need Help?

If you encounter any issues, have questions about the requirements, or need clarification on any part of the assessment, please don't hesitate to reach out:

**Email:** [ben@usehireup.com](mailto:ben@usehireup.com)

I'm here to help ensure you have everything you need to complete the assessment successfully.

## How to Submit

When you're ready to submit your solution:

1. **Ensure your code is complete and working:**
   - Backend builds and runs without errors
   - Frontend successfully communicates with the backend
   - Scoring logic is implemented correctly
   - Results are sorted properly (highest score first)
   - **All unit tests are implemented and passing** (`dotnet test` in `server/Tests`)

2. **Prepare your submission:**
   - Make sure all your code is committed to the repository
   - Include a `README.md` with:
     - Instructions on how to run both the server and client
     - Any additional setup steps required
     - Notes about your implementation approach (optional)

3. **Submit via one of the following methods:**
   - **GitHub Repository:** Share the repository link (make sure it's accessible)
   - **ZIP Archive:** Compress the entire project folder and send it via email
   - **Git Bundle:** Create a git bundle if you prefer version control history

4. **Send your submission to:** [ben@usehireup.com](mailto:ben@usehireup.com)

   Please include:
   - Your name
   - A brief note about your submission
   - The repository link or attached files

## Evaluation Criteria

Your submission will be evaluated on:

- **Functional Correctness:** Does it build, run, and produce correct results?
- **Code Quality:** Is the code well-organized, readable, and maintainable?
- **Architecture:** Is business logic properly separated from controllers?
- **Testing:** Are unit tests implemented and passing? (Required)
- **Bonus Points:** Additional test coverage and polished UI are appreciated!

Good luck! We're excited to see what you build. 🚀

