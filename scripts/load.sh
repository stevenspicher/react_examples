#!/bin/bash 

rm -r ../src/App/*
for entry in `ls ../projects`; do
  echo $entry
done
read -p 'which project folder?  ' foldervar
echo
echo moving $foldervar
mkdir ..src/App/
cp -r ../projects/$foldervar/* ../src/App/ 
