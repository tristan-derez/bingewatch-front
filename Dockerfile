# Use the official Bun image as a parent image
FROM oven/bun:1 as builder

# Set the working directory in the container
WORKDIR /app

# Copy all files from the current directory to the container
COPY . .

# Install dependencies
RUN bun install

# Run Panda CSS codegen
RUN bun run panda codegen

# Build your app
RUN bun run build

# Copy public assets to the dist directory
RUN cp -r public/* dist/

# Use a smaller base image for the final stage
FROM oven/bun:1-slim

WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app/dist ./dist

# Install a simple HTTP server
RUN bun add serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["bun", "run", "serve", "dist", "-l", "3000"]