
const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const csso = require('gulp-csso');

// compile component css
gulp.task('default', () => (
  gulp
    .src(['../es/**/index.less', '../lib/**/index.less'])
    .pipe(less({
      paths: [path.resolve(__dirname, 'node_modules')],
      javascriptEnabled: true
    }))
    .pipe(csso())
    .pipe(gulp.dest(file => file.base.replace('.less', '.css')))
));
