# This script inserts a template into all files in a specific directory.

#!/bin/bash

PREVIEW_DIR="./src/js"  # Adjust if needed

TEMPLATE='<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAGE Preview</title>
    <link rel="stylesheet" href="../assets/css/PAGE.css">
</head>
<body>
    <header>
        <h1>PAGE Preview</h1>
    </header>
    <!-- 🔥 Dynamic Content Section -->
    <div id="content"></div>
    <script>
        fetch("../html/")
            .then(response => response.text())
            .then(html => {
                // Use regex to extract all PAGE-*.html files
                const matches = [...html.matchAll(/PAGE-[\w-]+\.html/g)];
                const blocks = matches.map(m => m[0]);

                // Fetch & insert each block dynamically
                blocks.forEach(block => {
                    fetch(`../html/${block}`)
                        .then(response => response.text())
                        .then(data => {
                            const section = document.createElement("div");
                            section.innerHTML = data;
                            document.getElementById("content").appendChild(section);
                        });
                });
            });
    </script>
    <script src="../assets/js/PAGE.js"></script>
</body>
</html>'

# Loop through all .html files in local-preview and replace "PAGE" with filename
for file in "$PREVIEW_DIR"/*.html; do
    filename=$(basename "$file" .html)  # Extract filename without extension
    echo "${TEMPLATE//PAGE/$filename}" > "$file"  # Replace "PAGE" and write to file
    echo "Updated $file"
done
