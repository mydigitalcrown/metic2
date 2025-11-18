# IndexNow Direct Submission Script
# Submits all Metic.ai pages to search engines

Write-Host "IndexNow Submission for Metic.ai" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$key = "4d8c7e9f2a1b3c5e6d7f8a9b0c1d2e3f"
$host_url = "metic.ai"
$baseUrl = "https://metic.ai"

# All US states
$states = @('alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire','new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio','oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota','tennessee','texas','utah','vermont','virginia','washington','west-virginia','wisconsin','wyoming')

# Indian cities
$cities = @('mumbai','delhi','bangalore','hyderabad','ahmedabad','chennai','kolkata','pune','noida','gurugram','coimbatore','vizag')

# Build URL list
$urls = @("$baseUrl/","$baseUrl/about","$baseUrl/services","$baseUrl/contact","$baseUrl/custom-ai-development","$baseUrl/ai-integration-and-deployment","$baseUrl/data-engineering","$baseUrl/data-insights","$baseUrl/generative-ai-services","$baseUrl/machine-learning")

foreach ($state in $states) {
    $urls += "$baseUrl/artificial-intelligence-ai-services-in-$state"
    $urls += "$baseUrl/machine-learning-services-in-$state"
    $urls += "$baseUrl/generative-ai-services-in-$state"
}

foreach ($city in $cities) {
    $urls += "$baseUrl/artificial-intelligence-ai-services-in-$city"
    $urls += "$baseUrl/machine-learning-services-in-$city"
    $urls += "$baseUrl/generative-ai-services-in-$city"
}

Write-Host "Total URLs: $($urls.Count)" -ForegroundColor Yellow
Write-Host ""

# Create JSON payload
$body = @{
    host = $host_url
    key = $key
    keyLocation = "$baseUrl/$key.txt"
    urlList = $urls
} | ConvertTo-Json -Compress

# Submit to IndexNow
Write-Host "Submitting to IndexNow API..." -ForegroundColor Cyan

try {
    $response = Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow" -Method Post -Body $body -ContentType "application/json; charset=utf-8"
    Write-Host "SUCCESS! All $($urls.Count) pages submitted" -ForegroundColor Green
    Write-Host "Pages will be indexed by Bing, Yandex, and other search engines within 24-48 hours" -ForegroundColor Green
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    if ($statusCode -eq 202) {
        Write-Host "SUCCESS! (202 Accepted) - All $($urls.Count) pages queued for indexing" -ForegroundColor Green
    } else {
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "Status Code: $statusCode" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Next: Submit sitemap to Google Search Console" -ForegroundColor Yellow
Write-Host "URL: https://search.google.com/search-console" -ForegroundColor Gray
Write-Host "Sitemap: https://metic.ai/sitemap.xml" -ForegroundColor Gray
