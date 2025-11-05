Write-Host "Starting AI services content enhancement..." -ForegroundColor Green

# Get AI services pages (first 5 for testing)
$aiPages = Get-ChildItem -Path "src/app" -Filter "page.tsx" | Where-Object { $_.Directory.Name -like "artificial-intelligence-ai-services-in-*" } | Select-Object -First 5

Write-Host "Found $($aiPages.Count) AI services pages to update" -ForegroundColor Yellow

foreach ($page in $aiPages) {
    $folderName = $page.Directory.Name
    $location = $folderName -replace "artificial-intelligence-ai-services-in-", ""
    $locationTitle = (Get-Culture).TextInfo.ToTitleCase($location -replace "-", " ")
    
    Write-Host "Processing: $locationTitle" -ForegroundColor Cyan
    
    # Skip California as it's already done
    if ($location -eq "california") {
        Write-Host "  Skipping California - already processed" -ForegroundColor Yellow
        continue
    }
    
    $content = Get-Content -Path $page.FullName -Raw
    
    # Check if content exists
    if ($content -match "Comprehensive AI Services.*Content - SEO Optimized") {
        Write-Host "  Skipping $locationTitle - content exists" -ForegroundColor Yellow
        continue
    }
    
    # Add basic content before FAQ
    if ($content -match "FAQ Section") {
        $contentToAdd = "`n      {/* Comprehensive AI Services $locationTitle Content - SEO Optimized */}`n      <section className=`"py-24 bg-white`">`n        <div className=`"container px-4 md:px-6`">`n          <h2 className=`"text-4xl font-bold mb-6 text-center`">Leading AI Company In $locationTitle</h2>`n          <p className=`"text-xl text-gray-600 text-center mb-12`">Expert AI solutions for $locationTitle businesses</p>`n        </div>`n      </section>`n`n"
        
        $newContent = $content -replace "(.*?)(.*FAQ Section.*)", "`$1$contentToAdd`$2"
        Set-Content -Path $page.FullName -Value $newContent -Encoding UTF8
        
        Write-Host "  Added content to $locationTitle" -ForegroundColor Green
    }
}

Write-Host "Completed!" -ForegroundColor Green