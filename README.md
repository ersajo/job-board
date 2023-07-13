# job-board

seed db
sequelize db:seed:all

docker compose build
docker compose up pg_db -d
docker compose up