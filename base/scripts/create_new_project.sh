#!/bin/bash 



read -p 'name of project to create?  ' foldervar
echo
echo creating $foldervar 

mkdir ../projects/$foldervar/
cp -r ../src/App/* ../projects/$foldervar/
