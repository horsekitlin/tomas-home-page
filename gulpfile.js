const gulp = require('gulp');
const shell = require('gulp-shell');
const scp = require('gulp-scp2');

const destPath = `/var/www/html/home.tomas.website`;
const {
  HOST,
  DEST,
  ACCOUNT,
  PASSWORD,
} = process.env;

gulp.task('default', async () => {
  console.log(process.env);
  console.log(process.env.HOST);
  return gulp.src('./build/**')
  .pipe(scp({
    host: HOST,
    username: ACCOUNT,
    password: PASSWORD,
    dest: DEST,
  }))
  .on('error', function(err) {
    console.log(err);
  });
  // return gulp
  //   .src('*.js', { read: false })
  //   .pipe(shell("yarn build"))
  //   .pipe(shell(`mkdir -p ${destPath}`))
  //   .pipe(shell(`cp -a ./build/**/* ${destPath}`));
});