#!/usr/bin/env bash

rm -rf .turbo node_modules

# Define the directories to delete
TARGET_DIRS=("node_modules" "dist" "coverage" ".turbo")

# Loop through each target directory name
for dir in "${TARGET_DIRS[@]}"; do
  # Find and delete directories
  find . -type d -name "$dir" -prune -exec rm -rf {} + 
  
  echo "Deleted all '$dir' directories."
done

find . -type f -name "tsconfig.tsbuildinfo" -prune -exec rm -rf {} + 

echo "Cleanup complete."