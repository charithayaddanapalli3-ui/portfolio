<<<<<<< HEAD
@echo off
echo Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo Installing backend dependencies...
cd backend
call npm install
cd ..

echo.
echo ✅ Setup complete!
echo.
echo To start development:
echo   Terminal 1: cd backend ^&^& npm run dev
echo   Terminal 2: cd frontend ^&^& npm run dev
echo.
echo Or use Docker:
echo   docker-compose up
pause
=======
@echo off
echo Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo Installing backend dependencies...
cd backend
call npm install
cd ..

echo.
echo ✅ Setup complete!
echo.
echo To start development:
echo   Terminal 1: cd backend ^&^& npm run dev
echo   Terminal 2: cd frontend ^&^& npm run dev
echo.
echo Or use Docker:
echo   docker-compose up
pause
>>>>>>> 21a3431d0fbae437ff72e346a0874207bf714dd8
