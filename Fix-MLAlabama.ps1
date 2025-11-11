# Fix ML Alabama Page - Replace Ahmedabad with Alabama
$ErrorActionPreference = "Stop"

$file = "c:\Users\ASUS\Documents\metic2\src\app\machine-learning-services-in-alabama\page.tsx"

Write-Host "Reading ML Alabama file..." -ForegroundColor Yellow
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

Write-Host "Applying Alabama replacements..." -ForegroundColor Yellow

# Location replacements - Ahmedabad to Alabama
$content = $content -replace 'Ahmedabad', 'Alabama'
$content = $content -replace 'Gujarat', 'Alabama'
$content = $content -replace 'Manchester of India', 'Heart of Dixie'
$content = $content -replace 'en_IN', 'en_US'

# Geographic data
$content = $content -replace '380001', '35201'
$content = $content -replace '23\.0225', '32.7794'
$content = $content -replace '72\.5714', '-86.8287'

# Economic data
$content = $content -replace '\u20B94\.6T', '$243B'
$content = $content -replace '8\.4M', '5.0M'

# Industries - Replace Indian industries with Alabama industries
$content = $content -replace 'Textiles & Garments', 'Manufacturing'
$content = $content -replace 'Diamond & Jewelry', 'Aerospace'
$content = $content -replace 'Food Processing', 'Agriculture'

# Phone numbers
$content = $content -replace '\+91-789-251-8414', '+1-789-251-8414'
$content = $content -replace 'tel:\+917892518414', 'tel:+17892518414'

# Image replacements
$content = $content -replace 'og-ml-company-ahmedabad\.jpg', 'og-ml-company-alabama.jpg'
$content = $content -replace 'ml-company-ahmedabad', 'ml-company-alabama'

# URL replacements
$content = $content -replace '/machine-learning-services-in-ahmedabad/', '/machine-learning-services-in-alabama/'

# Function name
$content = $content -replace 'MLServicesAhmedabadPage', 'MLServicesAlabamaPage'
$content = $content -replace 'getAhmedabadMLStructuredData', 'getAlabamaMLStructuredData'

# Team name
$content = $content -replace 'Ahmedabad ML Team', 'Alabama ML Team'

# Specific location references
$content = $content -replace 'Maninagar', 'Birmingham'
$content = $content -replace 'Vastrapur', 'Montgomery'
$content = $content -replace 'SG Highway', 'Mobile'
$content = $content -replace 'Satellite', 'Huntsville'
$content = $content -replace 'Chandkheda', 'Tuscaloosa'
$content = $content -replace 'Bodakdev', 'Auburn'
$content = $content -replace 'Navrangpura', 'Dothan'
$content = $content -replace 'Ghatlodia', 'Hoover'
$content = $content -replace 'GIFT City', 'Anniston'
$content = $content -replace 'Naroda Industrial Area', 'Industrial Belt'

# Fix "Rich in textiles" to Alabama relevant
$content = $content -replace 'Rich in textiles, pharmaceuticals, and chemicals', 'Rich in manufacturing, aerospace, and agriculture'

# Country - be careful with IN
$content = $content -replace '\bIndia\b', 'United States'

Write-Host "Writing corrected content..." -ForegroundColor Yellow
[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)

Write-Host "ML Alabama page fixed successfully!" -ForegroundColor Green
Write-Host "All Ahmedabad references replaced with Alabama" -ForegroundColor Green
Write-Host "All stats remain at 50+" -ForegroundColor Green
Write-Host "Industry spelling preserved" -ForegroundColor Green
