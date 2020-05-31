#! /bin/bash

cat "$1" | sed 's/","/"|"/g' | cut -d'|' -f1,2 | sed 's/"|"/","/g' > src/data/contact.csv
