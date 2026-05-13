## KVA Logistic - MongoDB Setup

### 1) Environment Variables

Create `.env.local` with:

```bash
MONGODB_URI=your-mongodb-atlas-uri
MONGODB_DB=kva_logistic
```

### 2) Install and Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000/login`.

### 3) Mongo-backed Login Flow APIs

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/user-context?email=...`
- `PUT /api/users`
- `POST|PUT|DELETE /api/addresses`
- `POST /api/orders`
- `POST /api/support`

### 4) Deployment

On Vercel (or any host), add the same environment variables:

- `MONGODB_URI`
- `MONGODB_DB`

Then deploy with standard Next.js build command (`npm run build`).
