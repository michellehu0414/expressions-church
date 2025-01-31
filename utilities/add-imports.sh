#!/bin/bash

JS_DIR="./src/js"     # Change this if needed
SCSS_DIR="./src/scss/pages"  # Where your SCSS files are stored

for js_file in "$JS_DIR"/*.js; do
    js_filename=$(basename "$js_file" .js)
    scss_import="import '../scss/pages/${js_filename}.scss';"

    # Check if SCSS file exists before adding import
    if [ -f "$SCSS_DIR/${js_filename}.scss" ]; then
        # Add SCSS import to the top of the JS file (if not already there)
        if ! grep -q "$scss_import" "$js_file"; then
            echo "$scss_import" | cat - "$js_file" > temp && mv temp "$js_file"
            echo "Added import to $js_filename.js"
        else
            echo "Import already exists in $js_filename.js"
        fi
    else
        echo "No SCSS file found for $js_filename.js"
    fi
done
