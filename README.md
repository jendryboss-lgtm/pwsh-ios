# PowerShell 7 for iPhone

A PowerShell 7.6-compatible terminal you can install on an iPhone Home Screen.

Microsoft does **not** ship official `pwsh` for iOS. Official installers cover Windows, macOS, and Linux only:

https://learn.microsoft.com/en-us/powershell/scripting/install/install-powershell-on-macos?view=powershell-7.6

## Install on iPhone

1. Open the site in Safari.
2. Tap Share.
3. Tap **Add to Home Screen**.
4. Open **pwsh**.

## Try

```powershell
Get-Help
Get-Command
Get-ChildItem
Set-Location /Users/Jendry/Documents
Get-Content notes.txt
1..10 | Measure-Object -Sum
Get-Date -Format yyyy-MM-dd
New-Guid
Set-Theme Cascade
Connect-PSSession
```
