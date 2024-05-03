### 해당 포트가 사용 중일 떄
해당 포트를 사용중인 프로세스 ID를 찾아내어 종료
```powershell
netstat -aon | findstr :4000
taskkill /PID [프로세스_번호] /F
```