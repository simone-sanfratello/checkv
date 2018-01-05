const gulp = require('gulp')
const clean = require('gulp-clean')
const buffer = require('gulp-buffer')
const sourcemaps = require('gulp-sourcemaps')
const browserify = require('browserify')
const fs = require('fs-extra')
const source = require('vinyl-source-stream')

gulp.task('clean', function () {
  return gulp.src(['./_main.js', './dist/*'])
    .pipe(clean({force: true}))
})

gulp.task('browser', function () {
  let _main = fs.readFileSync('./main.js') + '\nwindow.checkv=check'
  fs.writeFileSync('./_main.js', _main)
  fs.ensureDirSync('./dist')

  const b = browserify({
    entries: './_main.js',
    debug: true
  })
  .transform('babelify', {
    presets: ['es2015', 'env'],
    minified: true,
    comments: false
  })

  return b.bundle()
    .pipe(source('checkv.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('post-build', ['browser'], function () {
  return gulp.src(['./_main.js'])
    .pipe(clean({force: true}))
})

gulp.task('default', ['browser', 'post-build'], function () {
  console.log('done')
})
