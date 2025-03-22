@echo off
echo Attempting to delete CourtConnectNew directory
timeout /t 2 /nobreak >nul
rmdir /S /Q "%~dp0CourtConnectNew"
if exist "%~dp0CourtConnectNew" (
  echo Could not delete directory
) else (
  echo Directory successfully deleted
)
pause 