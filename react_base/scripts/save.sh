#!/bin/bash 


for entry in `ls ../../projectAppFolders`; do
  echo $entry
done
read -p 'which project folder to save to?  ' foldervar
echo
echo moving $foldervar 

rm -r ../../projectAppFolders/$foldervar/* 
cp -r ../src/App/* ../../projectAppfolders/$foldervar/
