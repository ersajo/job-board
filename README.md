# job-board

backend

seed db
cd server
sequelize db:seed:all

run backend
docker compose build
docker compose up pg_db -d
docker compose up



front

docker compose build
docker compose up
