#! /bin/sh

docker run \
       -v $PWD/../Client:/Filesharing/Client:rw \
       -v $PWD/../Server:/Filesharing/Server:rw \
       -v $PWD/entrypoint.sh:/entrypoint.sh:ro \
       -e user_id=$(id -u $USER) \
       -e user=$USER \
       -it \
       filesharing:0.1.1 \
       /bin/sh -c "/entrypoint.sh"
