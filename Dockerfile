# Use Node.js LTS
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
