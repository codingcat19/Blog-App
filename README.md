# Blog App

A full-stack blog application containerized with Docker, featuring a React frontend, Node.js/Express backend, and MongoDB database.

## Technologies Used

- **Frontend**: React, Nginx
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose

## 📋 Prerequisites

Before running this project, make sure you have installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation & Setup

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/blog-app.git
   cd blog-app
```

2. **Start all services with Docker Compose**
```bash
   docker-compose up -d
```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001/api/posts
   - MongoDB: localhost:27017

## 📁 Project Structure
```
blog-app/
├── frontend/           # React application
│   ├── Dockerfile
│   └── ...
├── backend/            # Node.js API
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── ...
├── docker-compose.yml  # Docker Compose configuration
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/posts` | Get all blog posts |
| POST   | `/api/posts` | Create a new blog post |
| DELETE | `/api/posts/:id` | Delete a blog post by ID |

## Adding Blog Posts

### Using cURL:
```bash
curl -X POST http://localhost:5001/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Blog Title",
    "content": "This is my blog content"
  }'
```

### Using the API directly:
Navigate to `http://localhost:5001/api/posts` and use POST requests.

## Docker Commands
```bash
# Start all containers
docker-compose up -d

# Stop all containers
docker-compose down

# View logs
docker-compose logs

# Rebuild containers after code changes
docker-compose up --build

# Stop and remove everything (including volumes)
docker-compose down -v
```

## Development

To make changes to the code:

1. Edit the files in `frontend/` or `backend/`
2. Rebuild the containers:
```bash
   docker-compose up --build
```

## Troubleshooting

### Frontend shows 500 error
- Check Nginx configuration in `frontend/`
- View logs: `docker-compose logs frontend`

### Cannot connect to backend
- Ensure backend is running: `docker-compose ps`
- Check logs: `docker-compose logs backend`

### MongoDB connection issues
- Verify MongoDB is running: `docker-compose ps`
- Check connection string in `server.js`

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Sahil Shivalkar
- GitHub: [@codingcat19](https://github.com/codingcat19)
- LinkedIn: linkedin.com/in/sahilshivalkar

## Contributing

Contributions, issues, and feature requests are welcome!

**Happy Coding!**