# Script to add 2 missing FAQ schema entries to all AI service location pages
# Adds FAQ #5 (implementation timeline) and FAQ #6 (local benefits)

$pages = @(
    "artificial-intelligence-ai-services-in-arizona",
    "artificial-intelligence-ai-services-in-arkansas",
    "artificial-intelligence-ai-services-in-california",
    "artificial-intelligence-ai-services-in-colorado",
    "artificial-intelligence-ai-services-in-connecticut",
    "artificial-intelligence-ai-services-in-delaware",
    "artificial-intelligence-ai-services-in-florida"
)

foreach ($pagePath in $pages) {
    $filePath = "src\app\$pagePath\page.tsx"
    
    if (Test-Path $filePath) {
        Write-Host "Processing: $pagePath" -ForegroundColor Cyan
        
        $content = Get-Content $filePath -Raw
        
        # Extract location name from path
        $locationRaw = $pagePath -replace '.*-services-in-', ''
        $location = (Get-Culture).TextInfo.ToTitleCase($locationRaw -replace '-', ' ')
        
        # Find the last FAQ item pattern (4th question closing)
        $oldPattern = '              \}
            \]
          \}\)
        \}\}
      \/>'
        
        # New pattern with 2 additional FAQ items
        $newPattern = @"
              },
              {
                "@type": "Question",
                "name": "How long does AI implementation take with $location AI company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI implementation with our $location AI company typically takes 4-12 weeks depending on project complexity. We offer rapid deployment with 3x faster delivery than traditional approaches, including proof-of-concept in 2-3 weeks and full production deployment within 8-12 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose a local AI company in $location?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing a local AI company in $location like Metic.ai provides benefits including on-site support, understanding of local business culture and regulations, faster communication in your timezone, and expertise in $location's key industries with proven local case studies."
                }
              }
            ]
          })
        }}
      />
"@
        
        # Find the position of the last Question closing and inject new FAQs
        $pattern = '(?s)(\{\s*"@type":\s*"Question",\s*"name":\s*"What makes Metic\.ai the best AI Firm[^}]+\}[^}]+\})\s*\]'
        
        if ($content -match $pattern) {
            $replacement = '$1,' + "`n" + @"
              {
                "@type": "Question",
                "name": "How long does AI implementation take with $location AI company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI implementation with our $location AI company typically takes 4-12 weeks depending on project complexity. We offer rapid deployment with 3x faster delivery than traditional approaches, including proof-of-concept in 2-3 weeks and full production deployment within 8-12 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose a local AI company in $location?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing a local AI company in $location like Metic.ai provides benefits including on-site support, understanding of local business culture and regulations, faster communication in your timezone, and expertise in $location's key industries with proven local case studies."
                }
              }
            ]
"@
            
            $newContent = $content -replace $pattern, $replacement
            Set-Content -Path $filePath -Value $newContent -NoNewline
            Write-Host "✓ Updated: $pagePath" -ForegroundColor Green
        } else {
            Write-Host "✗ Pattern not found in: $pagePath" -ForegroundColor Yellow
        }
    } else {
        Write-Host "✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`nCompleted processing $($pages.Count) pages" -ForegroundColor Cyan
