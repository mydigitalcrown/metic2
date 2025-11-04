$remainingFiles = Get-ChildItem -Path "src" -Include "*.tsx" -Recurse | Where-Object { $_.Name -eq "page.tsx" }

foreach ($file in $remainingFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "contact@metic\.ai") {
        $newContent = $content -replace "contact@metic\.ai", "hello@matic.ai"
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Fixed remaining: $($file.FullName)"
    }
}