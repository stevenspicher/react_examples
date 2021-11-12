#!/bin/bash 



read -p 'name of project to create?  ' foldervar
echo
echo creating $foldervar 

mkdir ../../projectAppFolders/$foldervar/
cp -r ../src/App/* ../../projectAppfolders/$foldervar/
