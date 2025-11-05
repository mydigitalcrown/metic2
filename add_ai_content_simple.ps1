# Simple PowerShell script to add comprehensive content to AI services pages
Write-Host "Starting AI services content enhancement..." -ForegroundColor Green

# Get all AI services pages
$aiPages = Get-ChildItem -Path "src/app" -Filter "page.tsx" | Where-Object { $_.Directory.Name -like "artificial-intelligence-ai-services-in-*" }

Write-Host "Found $($aiPages.Count) AI services pages to update" -ForegroundColor Yellow

$processedCount = 0

foreach ($page in $aiPages) {
    $pagePath = $page.FullName
    $folderName = $page.Directory.Name
    
    # Extract location name from folder
    $location = $folderName -replace "artificial-intelligence-ai-services-in-", ""
    $locationTitle = (Get-Culture).TextInfo.ToTitleCase($location -replace "-", " ")
    
    Write-Host "Processing: $locationTitle" -ForegroundColor Cyan
    
    # Read the current file content
    $content = Get-Content -Path $pagePath -Raw
    
    # Check if comprehensive content already exists
    if ($content -match "Comprehensive AI Services.*Content - SEO Optimized") {
        Write-Host "  Skipping $locationTitle - content already exists" -ForegroundColor Yellow
        continue
    }
    
    # Skip California as it's already done
    if ($location -eq "california") {
        Write-Host "  Skipping California - already processed" -ForegroundColor Yellow
        continue
    }
    
    # Find FAQ section and add content before it
    if ($content -match "FAQ Section") {
        Write-Host "  Adding comprehensive content to $locationTitle..." -ForegroundColor Green
        
        # Simple content template
        $contentToAdd = @"

      {/* Comprehensive AI Services $locationTitle Content - SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">Leading </span>
                <span className="bg-gradient-to-r from-primary-orange to-secondary-orange bg-clip-text text-transparent">
                  Artificial Intelligence Company In $locationTitle
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-primary-orange to-secondary-orange mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming $locationTitle businesses with cutting-edge AI solutions and machine learning innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our <span className="text-primary-orange">AI Company In $locationTitle</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As the premier <strong className="text-gray-900">Artificial Intelligence Company In $locationTitle</strong>, Metic.ai 
                  delivers world-class AI solutions tailored to local business needs. Our deep understanding of $locationTitle's 
                  economic landscape ensures maximum ROI for your AI investments.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our <strong className="text-primary-orange">AI Development Company In $locationTitle</strong> combines global AI expertise 
                  with local market knowledge to provide custom artificial intelligence solutions that drive real business results.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-primary-orange/20">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">$locationTitle AI Success</h4>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-primary-orange mb-2">95%</div>
                    <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-secondary-orange mb-2">4.8x</div>
                    <div className="text-sm text-gray-600 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

"@
        
        # Replace content before FAQ
        $newContent = $content -replace "(.*?)(.*FAQ Section.*)", "`$1$contentToAdd`$2"
        
        # Write back to file
        Set-Content -Path $pagePath -Value $newContent -Encoding UTF8
        
        Write-Host "  ✓ Successfully added content to $locationTitle" -ForegroundColor Green
        $processedCount++
    }
    else {
        Write-Host "  ✗ No FAQ section found in $locationTitle" -ForegroundColor Red
    }
}

Write-Host "`nCompleted! Processed $processedCount pages" -ForegroundColor Green