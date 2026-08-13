# API Produtos - Infrastructure as Code

A simple REST API for product management built with **Node.js** and **Express**, containerized with **Docker**, and provisioned using **Terraform**.

The main goal of this project is to practice Infrastructure as Code (IaC) concepts by using Terraform to create and manage Docker resources.

## Technologies

- Node.js
- Express
- Docker
- Terraform


## API Endpoints

### List all products

```http
GET /produtos
```

Example response:

```json
[
  {
    "id": 1,
    "nome": "Notebook",
    "preco": 4500
  },
  {
    "id": 2,
    "nome": "Teclado",
    "preco": 80
  },
  {
    "id": 3,
    "nome": "Mouse",
    "preco": 15
  }
]
```

### Find product by ID

```http
GET /produtos/:id
```

Example:

```http
GET /produtos/1
```

## Running with Docker

Build the Docker image:

```bash
docker build -t api-produtos:latest .
```

Run the container:

```bash
docker run -p 3000:3000 api-produtos:latest
```

The API will be available at:

```text
http://localhost:3000/produtos
```

## Running with Terraform

Enter the Terraform directory:

```bash
cd Terraform
```

Initialize Terraform:

```bash
terraform init
```

Check the execution plan:

```bash
terraform plan
```

Create the infrastructure:

```bash
terraform apply
```

Terraform will provision the Docker image and container defined in `main.tf`.

To remove the infrastructure:

```bash
terraform destroy
```

## Infrastructure

Terraform is responsible for managing:

- Docker image for the Node.js API
- Docker container
- Port mapping between the host and container

```text
Terraform
    │
    ├── Docker Image
    │       └── Node.js + Express API
    │
    └── Docker Container
            └── Port 3000:3000
```

## Purpose

This project was created to practice:

- Infrastructure as Code (IaC)
- Terraform providers and resources
- Docker image creation
- Docker container provisioning
- REST API development with Node.js and Express
