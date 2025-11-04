# PowerShell script to update all email addresses to hello@matic.ai

Write-Host "🔍 Starting email address update across all files..." -ForegroundColor Yellow

# Define the old and new email patterns
$oldEmails = @(
    "contact@metic.ai",
    "info@metic.ai", 
    "Hello@metic.ai"
)
$newEmail = "hello@matic.ai"

# Get all TypeScript, JavaScript, and text files
$files = Get-ChildItem -Path "." -Include "*.tsx", "*.ts", "*.js", "*.txt", "*.md" -Recurse -File | 
    Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.git*" -and $_.FullName -notlike "*.next*" }

$updatedFiles = @()

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($content) {
        $originalContent = $content
        
        # Replace each old email pattern
        foreach ($oldEmail in $oldEmails) {
            $content = $content -replace [regex]::Escape($oldEmail), $newEmail
        }
        
        # Check if content was modified
        if ($content -ne $originalContent) {
            Set-Content -Path $file.FullName -Value $content
            $updatedFiles += $file.FullName
            Write-Host "✅ Updated: $($file.FullName)" -ForegroundColor Green
        }
    }
}

Write-Host "`n📊 Email Update Summary:" -ForegroundColor Cyan
Write-Host "Total files updated: $($updatedFiles.Count)" -ForegroundColor Green
Write-Host "New email address: $newEmail" -ForegroundColor Yellow

if ($updatedFiles.Count -gt 0) {
    Write-Host "`n📄 Updated files:" -ForegroundColor Blue
    foreach ($file in $updatedFiles) {
        Write-Host "  - $file" -ForegroundColor Gray
    }
}

Write-Host "`n✨ Email address update complete!" -ForegroundColor Green