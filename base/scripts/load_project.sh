#!/bin/bash 

rm -r ../src/App/*
for entry in `ls ../../projectAppFolders`; do
  echo $entry
done
read -p 'which project folder?  ' foldervar
echo
echo moving $foldervar
cp -r ../../projectAppFolders/$foldervar/* ../src/App/ 
