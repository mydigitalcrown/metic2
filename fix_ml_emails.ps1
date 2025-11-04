$mlFiles = Get-ChildItem -Path "src/app/machine-learning-services-*" -Include "*.tsx" -Recurse | Where-Object { $_.Name -eq "page.tsx" }

foreach ($file in $mlFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "info@metic\.ai|contact@metic\.ai") {
        $newContent = $content -replace "info@metic\.ai", "hello@matic.ai"
        $newContent = $newContent -replace "contact@metic\.ai", "hello@matic.ai"
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated ML: $($file.FullName)"
    }
}