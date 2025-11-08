# Bulk URL Submission to IndexNow for Fast Indexing
# This script submits all your AI service pages to IndexNow for rapid indexing by Bing, Yandex, and others

Write-Host "🚀 Metic.ai - Bulk IndexNow Submission Script" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Configuration
$baseUrl = "https://metic.ai"
$indexNowEndpoint = "https://api.indexnow.org/indexnow"

# Generate a simple API key (you can use any string)
$apiKey = "4d8c7e9f2a1b3c5e6d7f8a9b0c1d2e3f"  # Must match the file name in /public/

Write-Host "📋 Step 1: Create API Key File" -ForegroundColor Yellow
Write-Host "   Create a file at: public/$apiKey.txt" -ForegroundColor White
Write-Host "   Content: $apiKey" -ForegroundColor White
Write-Host ""

# All location pages to submit
$usStates = @(
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
    'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',
    'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
    'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',
    'wisconsin', 'wyoming'
)

$indianCities = @(
    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'ahmedabad', 'chennai', 'kolkata',
    'pune', 'noida', 'gurugram', 'coimbatore', 'vizag'
)

# Build URL list
$urls = @()

# Add main pages
$urls += "$baseUrl/"
$urls += "$baseUrl/about"
$urls += "$baseUrl/services"
$urls += "$baseUrl/contact"
$urls += "$baseUrl/custom-ai-development"
$urls += "$baseUrl/ai-integration-and-deployment"
$urls += "$baseUrl/data-engineering"
$urls += "$baseUrl/data-insights"
$urls += "$baseUrl/generative-ai-services"
$urls += "$baseUrl/machine-learning"

# Add AI service pages for US states
foreach ($state in $usStates) {
    $urls += "$baseUrl/artificial-intelligence-ai-services-in-$state"
}

# Add AI service pages for Indian cities
foreach ($city in $indianCities) {
    $urls += "$baseUrl/artificial-intelligence-ai-services-in-$city"
}

# Add ML service pages for US states
foreach ($state in $usStates) {
    $urls += "$baseUrl/machine-learning-services-in-$state"
}

# Add ML service pages for Indian cities
foreach ($city in $indianCities) {
    $urls += "$baseUrl/machine-learning-services-in-$city"
}

Write-Host "📊 Total URLs to submit: $($urls.Count)" -ForegroundColor Green
Write-Host ""

# IndexNow has a limit of 10,000 URLs per request, but let's batch in groups of 100 for reliability
$batchSize = 100
$totalBatches = [Math]::Ceiling($urls.Count / $batchSize)
$successCount = 0
$failCount = 0

Write-Host "📤 Step 2: Submitting to IndexNow..." -ForegroundColor Yellow
Write-Host "   Batches: $totalBatches (max 100 URLs each)" -ForegroundColor White
Write-Host ""

for ($i = 0; $i -lt $urls.Count; $i += $batchSize) {
    $batchNumber = [Math]::Floor($i / $batchSize) + 1
    $batchUrls = $urls[$i..([Math]::Min($i + $batchSize - 1, $urls.Count - 1))]
    
    Write-Host "   Batch $batchNumber/$totalBatches - Submitting $($batchUrls.Count) URLs..." -NoNewline
    
    # Prepare IndexNow request
    $body = @{
        host = "metic.ai"
        key = $apiKey
        keyLocation = "$baseUrl/$apiKey.txt"
        urlList = $batchUrls
    } | ConvertTo-Json -Depth 10
    
    try {
        # Submit to IndexNow
        $response = Invoke-RestMethod -Uri $indexNowEndpoint -Method Post -Body $body -ContentType "application/json; charset=utf-8" -ErrorAction Stop
        Write-Host " ✅ Success" -ForegroundColor Green
        $successCount += $batchUrls.Count
        
        # Be nice to the API - wait a bit between batches
        if ($batchNumber -lt $totalBatches) {
            Start-Sleep -Seconds 2
        }
    }
    catch {
        Write-Host " ❌ Failed" -ForegroundColor Red
        Write-Host "      Error: $($_.Exception.Message)" -ForegroundColor Red
        $failCount += $batchUrls.Count
    }
}

Write-Host ""
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "📈 Submission Complete!" -ForegroundColor Cyan
Write-Host "   ✅ Success: $successCount URLs" -ForegroundColor Green
Write-Host "   ❌ Failed: $failCount URLs" -ForegroundColor Red
Write-Host ""
Write-Host "⏱️  Expected Indexing Timeline:" -ForegroundColor Yellow
Write-Host "   • Bing: 24-48 hours" -ForegroundColor White
Write-Host "   • Yandex: 24-72 hours" -ForegroundColor White
Write-Host "   • Google: Not supported by IndexNow (use Search Console)" -ForegroundColor White
Write-Host ""
Write-Host "🔍 Verify Indexing Status:" -ForegroundColor Yellow
Write-Host "   Bing: site:metic.ai/artificial-intelligence-ai-services-in-alabama" -ForegroundColor White
Write-Host "   Google: site:metic.ai/artificial-intelligence-ai-services-in-alabama" -ForegroundColor White
Write-Host ""
Write-Host "📝 Next Steps for Google Indexing:" -ForegroundColor Yellow
Write-Host "   1. Go to https://search.google.com/search-console" -ForegroundColor White
Write-Host "   2. Submit sitemap: https://metic.ai/sitemap.xml" -ForegroundColor White
Write-Host "   3. Use URL Inspection tool for priority pages" -ForegroundColor White
Write-Host "   4. Request manual indexing" -ForegroundColor White
Write-Host ""
Write-Host "✨ All Done! Check back in 24-48 hours." -ForegroundColor Cyan
