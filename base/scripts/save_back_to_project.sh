#!/bin/bash 

for entry in `ls ../src/App/proj/`; do
cp -r ../src/App/* ../projects/$entry/

done
