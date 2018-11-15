#! /bin/sh

docker run \
       -v $PWD/../Client:/Filesharing/Client:rw \
       -v $PWD/../Server:/Filesharing/Server:rw \
       -v $PWD/entrypoint.sh:/entrypoint.sh:ro \
       -e user_id=$(id -u $USER) \
       -e user=$USER \
       -p 8081:8081 \
       -p 8082:8082 \
       -it \
       filesharing:0.2.1 \
       /bin/sh -c "/entrypoint.sh"
