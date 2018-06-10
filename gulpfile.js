const gulp = require('gulp'); //Init gulp
const autoprefixer = require('gulp-autoprefixer'); // Init gulp autoprefixer
const concat = require('gulp-concat'); // Init Gulp-concat

// autoprefixer
gulp.task ('autoprefixer', function(){
    gulp.src('source/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('app/css'))
})

// Concat all css fyles
gulp.task('concat-css', function(){
    gulp.src(['app/css/fonts.css','app/css/reset.css', 'app/css/components/*.css', 'app/css/pages/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('app/css'))
})

// Watch
gulp.task ('watch', ['autoprefixer', 'concat-css'], function(){
    gulp.watch('source/css/**/*.css', ['autoprefixer']); // Отслеживаем дерикторию(папку) сл стилями и запускаем таск autoprfixer
    gulp.watch('app/css/**/*.css', ['concat-css']);
})

//Default task
gulp.task('default', ['watch']);