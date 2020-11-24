const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

/* --- SCSS 編譯 --- */
gulp.task('sass', () => {
  return gulp
    .src('./source/scss/*.scss')
    .pipe(
      sass({
        outputStyle: 'compressed', // 執行壓縮
        includePaths: ['node_modules/bootstrap/scss/'], // 導入 sass 模塊可能路徑
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()])) // 加入 CSS Prefix
    .pipe(gulp.dest('./public/css'));
});