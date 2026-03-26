# Ứng dụng Frontend + Backend Docker

Cấu trúc:
- `backend/`: Node.js Express API.
- `frontend/`: React (Vite) UI.

## Chạy local (chưa dùng Docker)

backend:
```
cd backend
npm install
npm start
```

frontend:
```
cd frontend
npm install
npm run dev
```

## Build & chạy bằng Docker

Xây image:
```
docker build -t yourdockerhubusername/backend-api:latest ./backend
docker build -t yourdockerhubusername/frontend-app:latest ./frontend
```

Chạy:
```
docker run -p 4000:4000 yourdockerhubusername/backend-api:latest
docker run -p 3000:80 yourdockerhubusername/frontend-app:latest
```

Hoặc dùng docker-compose:
```
docker compose up --build
```

## Push lên Docker Hub

1) Đăng nhập:
```
docker login
```
2) Tag (nếu cần):
```
docker tag backend-api:latest yourdockerhubusername/backend-api:latest
docker tag frontend-app:latest yourdockerhubusername/frontend-app:latest
```
3) Push:
```
docker push yourdockerhubusername/backend-api:latest
docker push yourdockerhubusername/frontend-app:latest
```

## Lưu ý
- Thay `yourdockerhubusername` bằng tài khoản Docker Hub của bạn.
- Nếu muốn frontend gọi backend ở production, đổi cấu hình API URL phù hợp (không dùng `host.docker.internal` khi deploy).