FROM mcr.microsoft.com/devcontainers/java:17

# Install Node.js for React development
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Set workspace directory
WORKDIR /workspace
