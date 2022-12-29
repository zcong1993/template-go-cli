#!/usr/bin/env sh

if [ $# -eq 0 ]; then
    echo "usage: $0 <filename> <filename2>"
    echo "usage: $0 . # handle all files"
    exit 1
fi

FILES=("$@")

if [ "$1" = "." ]; then
  echo "all go files"
  FILES=$(find . -name "*.go" | grep -v -e ".mock.go" -e ".gen.go" -e ".pb.go")
fi

for i in "${FILES[@]}"; do
  sed -i '' -e '
    /^import/,/)/ {
      /^$/ d
    }
  ' $i
done
