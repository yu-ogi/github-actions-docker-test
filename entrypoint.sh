#!/bin/sh -l

node src/index.js

echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"
