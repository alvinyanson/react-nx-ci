FROM node:22.15.0-alpine AS builder


# Set working directory
WORKDIR /app

# Copy only the package.json and lock files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Build the React app
RUN npx nx build acme-web

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the build output to the Nginx directory
COPY --from=builder /app/apps/acme-web/dist /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]