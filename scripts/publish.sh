#!/usr/bin/env bash

# Navigate to the packages directory
cd apps || { echo "Packages directory not found!"; exit 1; }

# Loop through each subdirectory in the packages folder
for dir in */; do
  # Navigate into the package directory
  cd "$dir" || continue
  
  # Check if package.json exists
  if [ -f "package.json" ]; then
    echo "Publishing package: $dir"
    
    # Publish the package with public access
    pnpm publish --access public 
    
    # Check for successful publish
    if [ $? -eq 0 ]; then
      echo "Successfully published: $dir"
    else
      echo "Failed to publish: $dir"
    fi
  else
    echo "No package.json found in $dir, skipping..."
  fi
  
  # Navigate back to the packages directory
  cd ..
done

echo "All packages have been processed."
