#! /bin/sh

docker build -t filesharing:0.2.1 .

echo "user=$USER" > .env
echo "user_id=$(id -u $USER)" >> .env
