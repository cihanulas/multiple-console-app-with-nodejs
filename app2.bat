@echo off
echo Started..

:loop
rem timeout /t 5 /NOBREAK
ping 127.0.0.1 > nul
goto loop
