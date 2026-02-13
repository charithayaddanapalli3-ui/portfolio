# Deployment Guide

## Frontend Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Set framework as Vite
5. Deploy!

### Netlify
1. Run `npm run build` in frontend folder
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done!

### Environment Variables
Add to your Vercel/Netlify dashboard:
```
VITE_API_URL=https://your-backend-url.com/api
```

## Backend Deployment

### Railway
1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect your GitHub repository
4. Add these environment variables:
   - `NODE_ENV=production`
   - `PORT=5000`
5. Deploy!

### Heroku
```bash
# Create Procfile
echo "web: node server.js" > Procfile

# Push to Heroku
heroku login
heroku create your-app-name
git push heroku main
```

### Environment Variables
Set in your deployment platform:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=your-mongodb-uri
```

## Docker Deployment

### Local Testing
```bash
docker-compose up
```

### Cloud Deployment (AWS, GCP, Azure, etc.)
1. Build images:
```bash
docker build -t portfolio-frontend ./frontend
docker build -t portfolio-backend ./backend
```

2. Push to Docker Hub:
```bash
docker push your-docker-username/portfolio-frontend
docker push your-docker-username/portfolio-backend
```

3. Deploy on your cloud platform

## Post-Deployment Checklist

- [ ] Update `VITE_API_URL` in frontend for production
- [ ] Test all API endpoints
- [ ] Verify contact form works
- [ ] Check animations load smoothly
- [ ] Test on mobile devices
- [ ] Set up custom domain
- [ ] Enable HTTPS
- [ ] Set up monitoring/logging
- [ ] Configure backups for database

## Monitoring

Monitor your deployed apps:
- **Frontend**: Check Vercel/Netlify dashboard
- **Backend**: Check Railway/Heroku logs
- **Database**: Monitor MongoDB Atlas

## Troubleshooting

### CORS Issues
If frontend can't reach backend, update backend/server.js:
```javascript
app.use(cors({
  origin: 'https://your-frontend-url.com'
}))
```

### Static Files
For frontend on traditional server, configure web server to serve from dist/ folder.

### Database Connection
Ensure MongoDB URI is correct and firewall allows connections.
