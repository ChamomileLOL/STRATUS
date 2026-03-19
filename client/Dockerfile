# 1. THE FOUNDATION
FROM node:22-alpine

# 2. THE SANCTUM
WORKDIR /app

# 3. THE DEPENDENCIES
COPY package*.json ./
RUN npm install

# 4. THE MANIFESTATION
COPY . .

# 5. THE GATE (Vite default port)
EXPOSE 5173

# 6. THE AWAKENING (We must pass --host so Vite exposes it outside the container)
CMD ["npm", "run", "dev", "--", "--host"]