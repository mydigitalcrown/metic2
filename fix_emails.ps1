$files = Get-ChildItem -Path "src" -Include "*.tsx" -Recurse | Where-Object { $_.Name -eq "page.tsx" }

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "info@metic\.ai") {
        $newContent = $content -replace "info@metic\.ai", "hello@matic.ai"
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated: $($file.FullName)"
    }
}