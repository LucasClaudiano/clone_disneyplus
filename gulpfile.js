const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles(){ //compressão e compilação do SASS
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function images(){ //compressão das imagens do projeto
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch=function(){ //função responsável por fazer o monitoramento das mudanças e o run build automaticamente.
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
}