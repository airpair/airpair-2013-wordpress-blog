#!/bin/sh

DUMP_FILE=/tmp/airpair_blog.dump.sql
echo "--> dumping production db to $DUMP_FILE"
mysqldump -u airpair -p2Abh8LynLUNkQyt -h airpair-blog.ckacmg3osksd.us-east-1.rds.amazonaws.com > $DUMP_FILE
#mysqldump -u b807b78a055a2e -pd8fb3f39 -h us-cdbr-east-04.cleardb.com heroku_2035c318eba0f6f > $DUMP_FILE
mysql -h 192.168.33.10 -u wpuser -ppassword wordpress < $DUMP_FILE
