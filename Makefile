up:
	cp .env ./app/.env
	docker-compose up  --build --remove-orphans

up-prod:
	docker-compose up --build -d

down:
	docker-compose down

test:
	docker exec media_api_backend npm run test