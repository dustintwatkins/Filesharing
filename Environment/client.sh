#! /bin/sh

cd /Client
adduser -D -u $user_id $user
su $user

yarn start
