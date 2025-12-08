using InboxEngine.Models;

namespace InboxEngine.Services;

/// <summary>
/// TODO: Implement the priority scoring logic according to the requirements:
/// - VIP Status: +50 points if IsVIP is true
/// - Urgency Keywords: +30 points if Subject contains "Urgent", "ASAP", or "Error" (case-insensitive)
/// - Time Decay: +1 point for every hour passed since ReceivedAt
/// - Spam Filter: -20 points if Body contains "Unsubscribe" or "Newsletter"
/// - Clamping: Final score must be between 0 and 100 (inclusive)
/// </summary>
public class PriorityScoringService : IPriorityScoringService
{
    public int CalculatePriorityScore(Email email)
    {
        // TODO: Implement the scoring logic here
        // Start with a base score of 0
        // Apply all the rules from the requirements
        // Return the clamped score (0-100)
        
        throw new NotImplementedException("Priority scoring logic not yet implemented");
    }
}
