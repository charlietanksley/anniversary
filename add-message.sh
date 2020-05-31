#! /bin/bash


cat "$1" | sed 's/","/"|"/g' | cut -d'|' -f1,2 | sed 's/"|"/","/g' | sed 's/\\r\\n/<>/g' | sed -r "s/(<>)+/<>/g" | tr "<>" "\n" > src/data/contact.csv
