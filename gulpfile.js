const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass'))

function styles(){ //compressão e compilação do SASS
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

exports.default = styles;
exports.watch=function(){ //função responsável por fazer o monitoramento das mudanças e o run build automaticamente.
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
}