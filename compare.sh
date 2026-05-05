#!/bin/sh
#Usage: ./compare Correct.fbb /Directory/Of/Files/To/Test/

correct="$1"
maxDiffs=12
winners=()

#Adds a new line to the end of the correct bracket file
sed -i -e '$a\' $correct

for i in $2/*.fbb; do
	#Adds a new line to the end of each file
	sed -i -e '$a\' $i

	#Compares the last two lines of the correct bracket and of the test bracket. If they are different, throw away the bracket
	if [[ $(tail -n 1 $i) != $(tail -n 1 $correct) ]]
	then
		continue
	fi

	#Gets number of differences between the correct bracket and the test one
	differences=$(diff Winner.fbb $i | grep -F -o \< | wc -l)

	#If the number of differences is less than the current best, then throw empty the array and start it anew
	if [ "$differences" -lt "$maxDiffs" ] && [ "$differences" -ne "$maxDiffs" ]
	then
		maxDiffs=$differences
		winners=()
		winners+=("$i")
	#If the number of differences is equal to the best, then add it to the array
	elif [[ $differences -eq $maxDiffs ]]
	then
		winners+=("$i")
	#Otherwise, throw the bracket away
	else
		continue
	fi
done

echo "Winners: "

for i in "${winners[@]}"; do
	#Prints the name of every winner
	head -n 1 $i | sed 's/Name: //'
done

#Prints the number of differences between the winner and the correct bracket. (The difference in the name is not included.)
echo "Differences:" $((maxDiffs - 1))
