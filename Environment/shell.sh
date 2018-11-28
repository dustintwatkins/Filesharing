#! /bin/sh

docker run \
       -v $PWD/../Client:/Filesharing/Client:rw \
       -v $PWD/../Server:/Filesharing/Server:rw \
       -v $PWD/entrypoint.sh:/entrypoint.sh:ro \
       --user $(id -u):$(id -g) \
       -it \
       filesharing:0.2.1 \
       /bin/sh -c "/entrypoint.sh"
