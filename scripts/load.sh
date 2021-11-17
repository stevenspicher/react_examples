#!/bin/bash 


for entry in `ls ../projects`; do
  echo $entry
done
read -p 'which project folder?  ' foldervar
echo
echo moving $foldervar
rm -r ../src/App/
cd ..
mkdir src/App
cd scripts
cp -r ../projects/$foldervar/* ../src/App/ 
