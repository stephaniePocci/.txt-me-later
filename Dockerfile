# Use lightweight Node.js Alpine image
FROM node:22-alpine

# Set working directory in the container
WORKDIR /app

# Copy package manifest files first for caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Set environment variable for development
ENV NODE_ENV=development

# Expose port for Next.js (default: 3000)
EXPOSE 3000

# Start dev server with Turbo enabled
CMD ["npm", "run", "dev"]
