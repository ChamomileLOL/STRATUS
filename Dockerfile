# 1. THE FOUNDATION: We build upon a pure Linux/Node environment
FROM node:18-alpine

# 2. THE SANCTUM: We define the working directory inside the container
WORKDIR /app

# 3. THE DEPENDENCIES: We copy only what is needed to breathe
COPY package*.json ./
RUN npm install

# 4. THE SOUL: We copy the Source code into the vessel
COPY server.js ./

# 5. THE GATE: We expose the port of the Father
EXPOSE 5000

# 6. THE AWAKENING: The command that runs when the container is born
CMD ["node", "server.js"]