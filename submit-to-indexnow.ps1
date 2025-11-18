# IndexNow Submission Script for Metic.ai# Bulk URL Submission to IndexNow for Fast Indexing

# This script submits all pages to search engines for immediate indexing# This script submits all your AI service pages to IndexNow for rapid indexing by Bing, Yandex, and others



Write-Host "========================================" -ForegroundColor CyanWrite-Host "🚀 Metic.ai - Bulk IndexNow Submission Script" -ForegroundColor Cyan

Write-Host "  IndexNow Submission for Metic.ai" -ForegroundColor Cyan  Write-Host "=============================================" -ForegroundColor Cyan

Write-Host "========================================" -ForegroundColor CyanWrite-Host ""

Write-Host ""

# Configuration

$indexNowKey = "4d8c7e9f2a1b3c5e6d7f8a9b0c1d2e3f"$baseUrl = "https://metic.ai"

$baseUrl = "https://metic.ai"$indexNowEndpoint = "https://api.indexnow.org/indexnow"



# US States# Generate a simple API key (you can use any string)

$usStates = @($apiKey = "4d8c7e9f2a1b3c5e6d7f8a9b0c1d2e3f"  # Must match the file name in /public/

    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',

    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',Write-Host "📋 Step 1: Create API Key File" -ForegroundColor Yellow

    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',Write-Host "   Create a file at: public/$apiKey.txt" -ForegroundColor White

    'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',Write-Host "   Content: $apiKey" -ForegroundColor White

    'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',Write-Host ""

    'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',

    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',# All location pages to submit

    'wisconsin', 'wyoming'$usStates = @(

)    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',

    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',

# Indian Cities    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',

$indianCities = @(    'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire',

    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'ahmedabad', 'chennai', 'kolkata',    'new-jersey', 'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',

    'pune', 'noida', 'gurugram', 'coimbatore', 'vizag'    'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',

)    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west-virginia',

    'wisconsin', 'wyoming'

# Core pages)

$coreUrls = @(

    "$baseUrl",$indianCities = @(

    "$baseUrl/about",    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'ahmedabad', 'chennai', 'kolkata',

    "$baseUrl/services",    'pune', 'noida', 'gurugram', 'coimbatore', 'vizag'

    "$baseUrl/locations",)

    "$baseUrl/contact",

    "$baseUrl/machine-learning",# Build URL list

    "$baseUrl/custom-ai-development",$urls = @()

    "$baseUrl/ai-integration-and-deployment",

    "$baseUrl/data-engineering",# Add main pages

    "$baseUrl/data-insights",$urls += "$baseUrl/"

    "$baseUrl/generative-ai-services"$urls += "$baseUrl/about"

)$urls += "$baseUrl/services"

$urls += "$baseUrl/contact"

# Generate AI service URLs$urls += "$baseUrl/custom-ai-development"

$aiUrls = @()$urls += "$baseUrl/ai-integration-and-deployment"

foreach ($state in $usStates) {$urls += "$baseUrl/data-engineering"

    $aiUrls += "$baseUrl/artificial-intelligence-ai-services-in-$state"$urls += "$baseUrl/data-insights"

}$urls += "$baseUrl/generative-ai-services"

foreach ($city in $indianCities) {$urls += "$baseUrl/machine-learning"

    $aiUrls += "$baseUrl/artificial-intelligence-ai-services-in-$city"

}# Add AI service pages for US states

foreach ($state in $usStates) {

# Generate ML service URLs    $urls += "$baseUrl/artificial-intelligence-ai-services-in-$state"

$mlUrls = @()}

foreach ($state in $usStates) {

    $mlUrls += "$baseUrl/machine-learning-services-in-$state"# Add AI service pages for Indian cities

}foreach ($city in $indianCities) {

foreach ($city in $indianCities) {    $urls += "$baseUrl/artificial-intelligence-ai-services-in-$city"

    $mlUrls += "$baseUrl/machine-learning-services-in-$city"}

}

# Add ML service pages for US states

# Generate Generative AI service URLsforeach ($state in $usStates) {

$genAIUrls = @()    $urls += "$baseUrl/machine-learning-services-in-$state"

foreach ($state in $usStates) {}

    $genAIUrls += "$baseUrl/generative-ai-services-in-$state"

}# Add ML service pages for Indian cities

foreach ($city in $indianCities) {foreach ($city in $indianCities) {

    $genAIUrls += "$baseUrl/generative-ai-services-in-$city"    $urls += "$baseUrl/machine-learning-services-in-$city"

}}



# Combine all URLsWrite-Host "📊 Total URLs to submit: $($urls.Count)" -ForegroundColor Green

$allUrls = $coreUrls + $aiUrls + $mlUrls + $genAIUrlsWrite-Host ""



Write-Host "📊 Total URLs to submit: $($allUrls.Count)" -ForegroundColor Yellow# IndexNow has a limit of 10,000 URLs per request, but let's batch in groups of 100 for reliability

Write-Host "   - Core pages: $($coreUrls.Count)" -ForegroundColor Gray$batchSize = 100

Write-Host "   - AI service pages: $($aiUrls.Count)" -ForegroundColor Gray$totalBatches = [Math]::Ceiling($urls.Count / $batchSize)

Write-Host "   - ML service pages: $($mlUrls.Count)" -ForegroundColor Gray$successCount = 0

Write-Host "   - Generative AI pages: $($genAIUrls.Count)" -ForegroundColor Gray$failCount = 0

Write-Host ""

Write-Host "📤 Step 2: Submitting to IndexNow..." -ForegroundColor Yellow

# Prepare IndexNow payloadWrite-Host "   Batches: $totalBatches (max 100 URLs each)" -ForegroundColor White

$payload = @{Write-Host ""

    host = "metic.ai"

    key = $indexNowKeyfor ($i = 0; $i -lt $urls.Count; $i += $batchSize) {

    keyLocation = "$baseUrl/$indexNowKey.txt"    $batchNumber = [Math]::Floor($i / $batchSize) + 1

    urlList = $allUrls    $batchUrls = $urls[$i..([Math]::Min($i + $batchSize - 1, $urls.Count - 1))]

} | ConvertTo-Json -Depth 10    

    Write-Host "   Batch $batchNumber/$totalBatches - Submitting $($batchUrls.Count) URLs..." -NoNewline

# Submit to IndexNow API    

Write-Host "🚀 Submitting to IndexNow API..." -ForegroundColor Cyan    # Prepare IndexNow request

    $body = @{

try {        host = "metic.ai"

    $response = Invoke-RestMethod -Uri "https://api.indexnow.org/indexnow" `        key = $apiKey

        -Method Post `        keyLocation = "$baseUrl/$apiKey.txt"

        -ContentType "application/json; charset=utf-8" `        urlList = $batchUrls

        -Body $payload    } | ConvertTo-Json -Depth 10

    

    Write-Host "✅ SUCCESS! All pages submitted to search engines" -ForegroundColor Green    try {

    Write-Host ""        # Submit to IndexNow

    Write-Host "📌 Submitted to:" -ForegroundColor Yellow        $response = Invoke-RestMethod -Uri $indexNowEndpoint -Method Post -Body $body -ContentType "application/json; charset=utf-8" -ErrorAction Stop

    Write-Host "   - Bing" -ForegroundColor Gray        Write-Host " ✅ Success" -ForegroundColor Green

    Write-Host "   - Yandex" -ForegroundColor Gray        $successCount += $batchUrls.Count

    Write-Host "   - Seznam.cz" -ForegroundColor Gray        

    Write-Host "   - Naver" -ForegroundColor Gray        # Be nice to the API - wait a bit between batches

    Write-Host ""        if ($batchNumber -lt $totalBatches) {

    Write-Host "⏰ Pages will be crawled within 24-48 hours" -ForegroundColor Cyan            Start-Sleep -Seconds 2

    Write-Host ""        }

        }

    # Highlight new pages    catch {

    Write-Host "🆕 Recently added pages included:" -ForegroundColor Magenta        Write-Host " ❌ Failed" -ForegroundColor Red

    Write-Host "   ✓ generative-ai-services-in-new-jersey" -ForegroundColor Green        Write-Host "      Error: $($_.Exception.Message)" -ForegroundColor Red

    Write-Host "   ✓ generative-ai-services-in-new-hampshire" -ForegroundColor Green        $failCount += $batchUrls.Count

    Write-Host "   ✓ All 50 US state generative AI pages" -ForegroundColor Green    }

    Write-Host "   ✓ All 12 Indian city generative AI pages" -ForegroundColor Green}

    

} catch {Write-Host ""

    $statusCode = $_.Exception.Response.StatusCode.value__Write-Host "=============================================" -ForegroundColor Cyan

    Write-Host "📈 Submission Complete!" -ForegroundColor Cyan

    if ($statusCode -eq 202) {Write-Host "   ✅ Success: $successCount URLs" -ForegroundColor Green

        Write-Host "✅ SUCCESS! (HTTP 202 - Accepted)" -ForegroundColor GreenWrite-Host "   ❌ Failed: $failCount URLs" -ForegroundColor Red

        Write-Host "Pages queued for indexing by search engines" -ForegroundColor CyanWrite-Host ""

    } else {Write-Host "⏱️  Expected Indexing Timeline:" -ForegroundColor Yellow

        Write-Host "❌ Error submitting to IndexNow" -ForegroundColor RedWrite-Host "   • Bing: 24-48 hours" -ForegroundColor White

        Write-Host "Status Code: $statusCode" -ForegroundColor YellowWrite-Host "   • Yandex: 24-72 hours" -ForegroundColor White

        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor RedWrite-Host "   • Google: Not supported by IndexNow (use Search Console)" -ForegroundColor White

    }Write-Host ""

}Write-Host "🔍 Verify Indexing Status:" -ForegroundColor Yellow

Write-Host "   Bing: site:metic.ai/artificial-intelligence-ai-services-in-alabama" -ForegroundColor White

Write-Host ""Write-Host "   Google: site:metic.ai/artificial-intelligence-ai-services-in-alabama" -ForegroundColor White

Write-Host "========================================" -ForegroundColor CyanWrite-Host ""

Write-Host "  Next Steps for Google Indexing:" -ForegroundColor CyanWrite-Host "📝 Next Steps for Google Indexing:" -ForegroundColor Yellow

Write-Host "========================================" -ForegroundColor CyanWrite-Host "   1. Go to https://search.google.com/search-console" -ForegroundColor White

Write-Host ""Write-Host "   2. Submit sitemap: https://metic.ai/sitemap.xml" -ForegroundColor White

Write-Host "1. Google Search Console:" -ForegroundColor YellowWrite-Host "   3. Use URL Inspection tool for priority pages" -ForegroundColor White

Write-Host "   - Go to: https://search.google.com/search-console" -ForegroundColor GrayWrite-Host "   4. Request manual indexing" -ForegroundColor White

Write-Host "   - Submit sitemap: https://metic.ai/sitemap.xml" -ForegroundColor GrayWrite-Host ""

Write-Host "   - Request indexing for new pages manually" -ForegroundColor GrayWrite-Host "✨ All Done! Check back in 24-48 hours." -ForegroundColor Cyan

Write-Host ""
Write-Host "2. Manual URL Inspection (for new pages):" -ForegroundColor Yellow
Write-Host "   - $baseUrl/generative-ai-services-in-new-jersey" -ForegroundColor Gray
Write-Host "   - $baseUrl/generative-ai-services-in-new-hampshire" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Expected Timeline:" -ForegroundColor Yellow
Write-Host "   - IndexNow (Bing/Yandex): 24-48 hours" -ForegroundColor Gray
Write-Host "   - Google (with manual request): 1-7 days" -ForegroundColor Gray
Write-Host "   - Google (natural crawl): 1-4 weeks" -ForegroundColor Gray
Write-Host ""
