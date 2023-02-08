// generated on 2015-11-21 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import dartSass from 'sass';
import imagemin, { svgo } from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';
import mainBowerFiles from 'main-bower-files';

const $ = gulpLoadPlugins();
const sass = gulpSass(dartSass);
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('app/styles/main.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', sass.logError))
    .pipe($.autoprefixer({browsers: ['last 3 version']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('app/styles/build'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

gulp.task('html', gulp.series('styles'), () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe(gulp.dest('dist/public'));
});

gulp.task('scripts-build', gulp.series('html'), () => {
  return gulp.src('dist/public/scripts/*.js')
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(gulp.dest('dist/public/scripts'));
});

gulp.task('styles-build', gulp.series('html'), () => {
  return gulp.src('dist/public/styles/build/*.css')
    .pipe($.minifyCss({compatibility: '*'}))
    .pipe(gulp.dest('dist/public/styles/build'));
});

gulp.task('html-build', gulp.series('html'), () => {
  return gulp.src('dist/public/index.html')
    .pipe($.minifyHtml({conditionals: true, loose: true}))
    .pipe(gulp.dest('dist/public'));
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache(imagemin([
      svgo({
        plugins: [
          {
            name: 'cleanupIDs',
            active: false
          }
        ]
      })
    ]))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/public/images'));
});

gulp.task('views', () => {
  return gulp.src('app/views/**/*')
    .pipe(gulp.dest('dist/public/views'));
});

gulp.task('data', () => {
  return gulp.src('app/data/*')
    .pipe(gulp.dest('dist/public/data'));
});

gulp.task('fonts', () => {
  return gulp.src(mainBowerFiles({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/styles/webfonts/**/*'))
    .pipe(gulp.dest('dist/public/styles/webfonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist/public'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist/public']));

gulp.task('serve', gulp.series('styles', 'fonts'), () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/views/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('app/fonts/**/*', gulp.series('fonts'));
  gulp.watch('bower.json', gulp.series('wiredep', 'fonts'));
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist/public']
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', gulp.series('lint:test'));
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', gulp.series('html-build', 'scripts-build', 'styles-build', 'images', 'views', 'data', 'fonts', 'extras', () => {
  return gulp.src('dist/public/**/*').pipe($.size({title: 'build', gzip: true}));
}));

gulp.task('heroku', gulp.series('clean', () => {
  gulp.series('build');
}));

gulp.task('default', gulp.series('clean', 'build', () => {
  // gulp.series('build');

  gulp.watch('app/styles/*.scss',gulp.series('styles'));
}));
