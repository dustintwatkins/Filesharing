#! /bin/sh

cd /Server
adduser -D -u $user_id $user
su $user

yarn start
