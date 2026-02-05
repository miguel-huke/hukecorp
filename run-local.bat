@echo off
setlocal
set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

where py >nul 2>&1
if not errorlevel 1 (
  echo Starting server at http://localhost:7777
  py -m http.server 7777
  goto :end
)

where python >nul 2>&1
if not errorlevel 1 (
  echo Starting server at http://localhost:7777
  python -m http.server 7777
  goto :end
)

echo Python not found. Install Python 3 to run a local server.
:end
echo.
echo Press any key to close this window.
pause >nul
