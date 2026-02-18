# Deployment — trevortrusty.com

Static React SPA (Create React App) served by nginx on a Linode VPS.
No server process needed — just build and point nginx at the `build/` folder.

---

## First-Time Setup

### 1. Clone the repo on the server
```bash
git clone git@github.com:trevortrusty/trevortrusty.com.git /var/www/trevortrusty.com
cd /var/www/trevortrusty.com
```

### 2. Install dependencies and build
```bash
npm install
npm run build
```
Output lands in `/var/www/trevortrusty.com/build/`.

### 3. Configure nginx

Create `/etc/nginx/sites-available/trevortrusty.com`:
```nginx
server {
    listen 80;
    server_name trevortrusty.com www.trevortrusty.com;

    root /var/www/trevortrusty.com/build;
    index index.html;

    # React Router fallback — serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable the site and reload nginx:
```bash
sudo ln -s /etc/nginx/sites-available/trevortrusty.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Add SSL with Certbot
```bash
sudo certbot --nginx -d trevortrusty.com -d www.trevortrusty.com
```
Certbot will update the nginx config automatically and set up auto-renewal.

---

## Redeployment (After Changes)

SSH into the VPS, then:

```bash
cd /var/www/trevortrusty.com
git pull
npm install          # only needed if package.json changed
npm run build
```

No nginx reload required — the `build/` folder is updated in place and nginx serves files directly.

> If you changed nginx config itself, run `sudo nginx -t && sudo systemctl reload nginx` after.

---

## Notes

- The `build/` folder is git-ignored — it lives only on the server after `npm run build`.
- This site shares the VPS with **LunchBox** (Next.js, port 3000, managed by PM2). They don't interfere — trevortrusty.com is pure static files, no port needed.
- The React Router `try_files` fallback is required. Without it, navigating directly to `/newtab` returns a 404 from nginx.
