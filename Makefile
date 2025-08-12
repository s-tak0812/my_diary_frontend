build:
	docker compose build --progress=plain

install:
	docker compose run --rm app npm install

up:
	docker compose up --remove-orphans --build

up_d:
	docker compose up --remove-orphans --build -d

down:
	docker compose down

logs:
	docker compose logs -f