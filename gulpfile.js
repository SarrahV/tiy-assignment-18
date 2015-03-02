var gulp  = require("gulp");
var bower = require("main-bower-files");
var _     = require("underscore");

gulp.task("bower:assets:dev", function() {

  var prodFiles = bower();
  var devFiles  = _.difference(bower({includeDev: true}), prodFiles);

  gulp.src(devFiles)
    .pipe(gulp.dest("dev_assets"));

});

gulp.task("bower:assets:prod", function() {

  gulp.src(bower())
    .pipe(gulp.dest("vendor_assets"));

});

gulp.task("bower:assets", ["bower:assets:prod", "bower:assets:dev"]);