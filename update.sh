#!/bin/sh

bearNames=()
# Gets the names of bears from the user
for i in {1..12}; do
	read -p "Enter name for bear $i: " bearName

	bearNames[i]=$bearName
done

# Replaces all occurences of bearX in index.html with its new name
for i in {1..8}; do
	sed -i "s/\(Bear$i\">\)\(.*\)/\1${bearNames[i]}<\/option>/" index.html
done

# Replaces all occurences of bearX in bears.js with its new name
for i in {1..12}; do
	sed -i "s/\(Option(\"\).*\(\",\"Bear$i\)/\1${bearNames[i]}\2/g" bears.js
done
