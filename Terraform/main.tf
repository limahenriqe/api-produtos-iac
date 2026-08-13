terraform {
  required_providers {
    docker = {
        source = "kreuzwerker/docker"
        version = "~> 3.0.0"
    }
  }
}
provider "docker" {}

resource "docker_image" "api" {
    name = "api-produtos:latest"

    build {
        context = ".."
        dockerfile = "Dockerfile"
    }
}

resource "docker_container" "api" {
     name = "container-api"
    image = docker_image.api.image_id

    ports {
        internal = 3000
        external = 3000
    }
}

