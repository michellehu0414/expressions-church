#!/bin/bash

# Usage:
#   ./create_component.sh <componentName> [destinationDirectory]
# Example: ./create_component.sh fireReliefSection src/components
#
# If destinationDirectory is not provided, the component folder is created in the current directory.

# Check if a component name was provided
if [ -z "$1" ]; then
  echo "Usage: $0 <componentName> [destinationDirectory]"
  exit 1
fi

# Use the first argument as the component name
COMPONENT="$1"

# Use the second argument as the destination directory; default to current directory if not provided
DESTINATION="${2:-.}"

# Create the destination directory if it doesn't exist
mkdir -p "$DESTINATION"

# Create a folder named after the component within the destination directory and navigate into it
COMPONENT_DIR="$DESTINATION/$COMPONENT"
mkdir -p "$COMPONENT_DIR"
cd "$COMPONENT_DIR" || exit 1

# Create an empty HTML file
touch "${COMPONENT}.html"

# Create an empty SCSS file
touch "${COMPONENT}.scss"

# Create the JavaScript file that imports the SCSS and HTML files
cat <<EOF > "${COMPONENT}.js"
import './${COMPONENT}.scss';

import ${COMPONENT}Template from 'raw-loader!./${COMPONENT}.html';

export function render() {
  return ${COMPONENT}Template;
}
EOF

echo "Component folder '$COMPONENT_DIR' created with ${COMPONENT}.html, ${COMPONENT}.scss, and ${COMPONENT}.js."
