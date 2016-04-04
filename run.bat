cd "%~dp0"

autoit.exe "force.au3"

autoit.exe "ekl.au3"

autoit.exe "rmico.au3"

del /q /s /f "%userprofile%\Downloads\FB_Player_UPDATE*.jse"
