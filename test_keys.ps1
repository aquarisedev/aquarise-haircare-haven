
$baseUrl = "https://chatwoot.aquariseia.ch"
$key1 = "qbjB2LeNe1SMnqFQjTt9NWY3"
$key2 = "opWMSeT4NAe5rm9Q2oT1yhhi"
$sourceId = "test-verification-123"

function Test-Key {
    param($key)
    $url = "$baseUrl/public/api/v1/inboxes/$key/contacts"
    $body = @{
        source_id = $sourceId
        name = "Test Bot"
        email = "test@bot.com"
    } | ConvertTo-Json

    try {
        $response = Invoke-RestMethod -Uri $url -Method Post -Body $body -ContentType "application/json" -ErrorAction Stop
        Write-Output "SUCCESS: Key $key is VALID."
        Write-Output $response
    } catch {
        Write-Output "FAILED: Key $key failed."
        Write-Output $_.Exception.Message
    }
}

Write-Output "Testing Key 1: $key1"
Test-Key -key $key1

Write-Output "`nTesting Key 2: $key2"
Test-Key -key $key2
