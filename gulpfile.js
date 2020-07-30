const gulp = require('gulp');
const shell = require('gulp-shell');

const destPath = `/var/www/html/home.tomas.website`;

gulp.task('default', async (done) => {
  console.log(process.env);
  console.log(process.env.HOST);
  done();
  // return gulp
  //   .src('*.js', { read: false })
  //   .pipe(shell("yarn build"))
  //   .pipe(shell(`mkdir -p ${destPath}`))
  //   .pipe(shell(`cp -a ./build/**/* ${destPath}`));
});