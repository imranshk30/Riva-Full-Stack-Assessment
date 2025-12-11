using Xunit;
using InboxEngine.Models;
using InboxEngine.Services;

namespace InboxEngine.Tests.Services;

public class PriorityScoringServiceTests
{
    private readonly IPriorityScoringService _service;

    public PriorityScoringServiceTests()
    {
        _service = new PriorityScoringService();
    }

    
}

