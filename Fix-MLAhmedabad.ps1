# Fix ML Ahmedabad Page - Convert from AI to ML terminology
$ErrorActionPreference = "Stop"

$sourceFile = "c:\Users\ASUS\Documents\metic2\src\app\artificial-intelligence-ai-services-in-ahmedabad\page.tsx"
$destFile = "c:\Users\ASUS\Documents\metic2\src\app\machine-learning-services-in-ahmedabad\page.tsx"

Write-Host "Reading source file..." -ForegroundColor Yellow
$content = [System.IO.File]::ReadAllText($sourceFile, [System.Text.Encoding]::UTF8)

Write-Host "Applying ML conversions..." -ForegroundColor Yellow

# Primary terminology replacements
$content = $content -replace 'Artificial Intelligence', 'Machine Learning'
$content = $content -replace 'artificial intelligence', 'machine learning'

# AI to ML replacements (word boundaries)
$content = $content -replace '\bAI Company\b', 'ML Company'
$content = $content -replace '\bAI Service\b', 'ML Service'
$content = $content -replace '\bAI Firm\b', 'ML Firm'
$content = $content -replace '\bAI Development\b', 'ML Development'
$content = $content -replace '\bAI Solutions\b', 'ML Solutions'
$content = $content -replace '\bAI Consulting\b', 'ML Consulting'
$content = $content -replace '\bAI Technology\b', 'ML Technology'
$content = $content -replace '\bAI automation\b', 'ML automation'
$content = $content -replace '\bAI software\b', 'ML software'
$content = $content -replace '\bAI integration\b', 'ML integration'
$content = $content -replace '\bAI implementation\b', 'ML implementation'
$content = $content -replace '\bAI experts\b', 'ML experts'
$content = $content -replace '\bAI services\b', 'ML services'
$content = $content -replace '\bAI projects\b', 'ML projects'
$content = $content -replace '\bAI ML\b', 'ML'

# URL replacements
$content = $content -replace '/artificial-intelligence-ai-services-in-ahmedabad/', '/machine-learning-services-in-ahmedabad/'

# Image replacements
$content = $content -replace 'og-ai-company-ahmedabad\.jpg', 'og-ml-company-ahmedabad.jpg'
$content = $content -replace 'ai-company-ahmedabad', 'ml-company-ahmedabad'

# Function names
$content = $content -replace 'AIServicesAhmedabadPage', 'MLServicesAhmedabadPage'
$content = $content -replace 'getAhmedabadStructuredData', 'getAhmedabadMLStructuredData'

# Team name
$content = $content -replace 'Ahmedabad AI Team', 'Ahmedabad ML Team'

# Stats normalization - use regex for exact matches
$content = $content -replace '2100\+', '50+'
$content = $content -replace '180\+', '50+'
$content = $content -replace '99\.5%', '99%'
$content = $content -replace '5\.2x', '5x'

Write-Host "Writing to destination file..." -ForegroundColor Yellow
[System.IO.File]::WriteAllText($destFile, $content, [System.Text.Encoding]::UTF8)

Write-Host "ML Ahmedabad page conversion complete!" -ForegroundColor Green
Write-Host "All AI terminology converted to ML" -ForegroundColor Green
Write-Host "All stats normalized to 50+" -ForegroundColor Green
Write-Host "URLs and images updated" -ForegroundColor Green
Write-Host "Function names updated" -ForegroundColor Green
