const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

const scssFolder = './src/scss/';
const componentsFolder = './src/components/';

// Function to get all subdirectories within a directory
function getFolders(dir) {
    return fs.readdirSync(dir).filter(file => fs.statSync(path.join(dir, file)).isDirectory());
}

// Function to generate an _all-foldername.scss file for each subdirectory
function generateImports(folder, folderPath) {
    const files = fs.readdirSync(folderPath)
        .filter(file => file.endsWith('.scss') && !file.startsWith('_all-'))
        .map(file => {
            const filename = file.replace(/^_/, '').replace('.scss', '');
            return `@import '${filename}';`;
        }).join('\n');

    fs.writeFileSync(path.join(folderPath, `_all-${folder}.scss`), files);
}

// Task to generate imports for SCSS folder
gulp.task('generate-scss-imports', function (done) {
    const folders = getFolders(scssFolder);
    folders.forEach(folder => generateImports(folder, path.join(scssFolder, folder)));
    done();
});

// Task to generate imports for components folder
gulp.task('generate-components-imports', function (done) {
    const componentFolders = getFolders(componentsFolder);
    const imports = componentFolders.map(folder => {
        const folderPath = path.join(componentsFolder, folder);
        const files = fs.readdirSync(folderPath)
            .filter(file => file.endsWith('.scss'))
            .map(file => {
                const filename = path.join(folder, file.replace(/^_/, '').replace('.scss', ''));
                return `@import '${filename}';`;
            }).join('\n');

        return files;
    }).join('\n');

    fs.writeFileSync(path.join(componentsFolder, '_all-components.scss'), imports);
    done();
});

// Watch task to automatically run the generate-imports task on changes
gulp.task('watch', function () {
    gulp.watch(`${scssFolder}/**/*.scss`, gulp.series('generate-scss-imports'));
    gulp.watch(`${componentsFolder}/**/*.scss`, gulp.series('generate-components-imports'));
});

// Default task to run all tasks in sequence
gulp.task('default', gulp.series('generate-scss-imports', 'generate-components-imports', 'watch'));
