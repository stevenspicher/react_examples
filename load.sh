#!/bin/bash 

rm -r react_base/src/App/*
for entry in `ls projectAppFolders`; do
  echo $entry
done
read -p 'which project folder?  ' foldervar
echo
echo moving $foldervar
cp -r projectAppFolders/$foldervar/* react_base/src/App/ 
cd react_base/
code .
npm start