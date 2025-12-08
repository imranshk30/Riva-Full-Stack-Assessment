using Microsoft.AspNetCore.Mvc;
using InboxEngine.Models;
using InboxEngine.Services;

namespace InboxEngine.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InboxController : ControllerBase
{
    private readonly IPriorityScoringService _scoringService;
    private readonly ILogger<InboxController> _logger;

    public InboxController(IPriorityScoringService scoringService, ILogger<InboxController> logger)
    {
        _scoringService = scoringService;
        _logger = logger;
    }

    [HttpPost("sort")]
    public IActionResult SortEmails([FromBody] List<Email> emails)
    {
        // TODO: Implement the endpoint logic:
        // 1. Validate the input (check for null or empty list)
        // 2. Calculate priority score for each email using _scoringService
        // 3. Sort emails by PriorityScore (highest first)
        // 4. Return the sorted list
        
        throw new NotImplementedException("Sort endpoint not yet implemented");
    }
}
