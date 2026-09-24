@echo off
echo ============================================================
echo   Saikamlesh M Portfolio - Deploy to GitHub & GitHub Pages
echo ============================================================
echo.
echo 1. Checking connection to github.com...
ping -n 1 github.com >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Cannot reach github.com.
    echo Please reconnect your Wi-Fi or mobile hotspot to the internet, then run this again!
    echo.
    pause
    exit /b 1
)

echo [OK] Internet connection verified!
echo.
echo 2. Pushing main branch to https://github.com/Saikamlesh-git/Portfolio...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ============================================================
    echo [SUCCESS] Portfolio successfully uploaded to GitHub!
    echo The automated GitHub Actions workflow will now build and 
    echo publish your portfolio live.
    echo.
    echo Repository: https://github.com/Saikamlesh-git/Portfolio
    echo ============================================================
) else (
    echo.
    echo [NOTE] If the repository does not exist on your GitHub account yet:
    echo 1. Open https://github.com/new
    echo 2. Set Repository Name: Portfolio (Public)
    echo 3. Leave "Initialize with README" UNCHECKED
    echo 4. Click "Create repository"
    echo 5. Run deploy.bat again to push!
)

echo.
pause
