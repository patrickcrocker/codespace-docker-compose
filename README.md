# React + Spring Boot + PostgreSQL Dev Container

This is a sample full-stack application using React for the frontend, Spring Boot for the backend, and PostgreSQL as the database. The project is configured to run in a VS Code Dev Container using Docker Compose.

## Project Structure

```
.
├── .devcontainer/          # Dev Container configuration
│   ├── devcontainer.json   # Dev Container settings
│   └── docker-compose.yml  # Docker Compose for services
├── backend/                # Spring Boot backend
│   ├── src/
│   │   └── main/
│   │       ├── java/       # Java source files
│   │       └── resources/  # Application configuration
│   └── pom.xml             # Maven configuration
├── frontend/               # React frontend
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Styles
│   ├── index.html          # HTML template
│   ├── package.json        # npm configuration
│   └── vite.config.js      # Vite configuration
└── README.md
```

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [VS Code](https://code.visualstudio.com/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Getting Started

1. **Open in Dev Container**
   - Open this folder in VS Code
   - When prompted, click "Reopen in Container" or use the Command Palette (`F1`) and select "Dev Containers: Reopen in Container"
   - Wait for the container to build and start

2. **Start the Backend**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   The backend will start on http://localhost:8080

3. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will start on http://localhost:3000

## Services

- **Frontend (React)**: http://localhost:3000
- **Backend (Spring Boot)**: http://localhost:8080
- **PostgreSQL**: localhost:5432
  - Database: `appdb`
  - Username: `postgres`
  - Password: `postgres`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/items | Get all items |
| GET | /api/items/{id} | Get item by ID |
| POST | /api/items | Create new item |
| PUT | /api/items/{id} | Update item |
| DELETE | /api/items/{id} | Delete item |

## Development

### Backend Commands
```bash
cd backend
./mvnw spring-boot:run    # Run the application
./mvnw clean install      # Build the application
./mvnw test               # Run tests
```

### Frontend Commands
```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Technologies

- **Frontend**: React 19, Vite
- **Backend**: Spring Boot 3.2, Spring Data JPA
- **Database**: PostgreSQL 15
- **Containerization**: Docker, Docker Compose
- **Development**: VS Code Dev Containers