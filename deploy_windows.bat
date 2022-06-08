@REM NOTE: As this is a batch file, the script will only work on Windows. Replace <app-name>, <dockerhub-username>, and <server-ip-address> before running. Docker must be running before launching this script.

@echo off

call npm run build

echo old tags:
docker image ls <dockerhub-username>/<app-name>

echo.
set /p tagname="What should the next tag name be? "

docker build -t <dockerhub-username>/<app-name>:%tagname% .
docker push <dockerhub-username>/<app-name>:%tagname%

ssh root@<server-ip-address> "docker pull <dockerhub-username>/<app-name>:%tagname% && dokku git:from-image <app-name> <dockerhub-username>/<app-name>:%tagname%"