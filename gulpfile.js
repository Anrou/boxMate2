let gulp = require('gulp');
let clean = require('gulp-clean');
let handlebars = require('gulp-ember-handlebars');
let concat = require('gulp-concat');
let emberTemplates = require('gulp-ember-templates');
let emberCompiler = require('/front/bower_components/bower/ember-template-compiler.js');
//gulp.task('clean', [], function() {
//    gulp.src(['public/tmp', 'public/final'], {read: false})
//        .pipe(clean());
//});
gulp.task('templates', function () {
    gulp.src('./front/templates/*.hbs')
        .pipe(emberTemplates({
            compiler: emberCompiler,
            isHTMLBars: true // Will generate `Ember.HTMLBars.template({ ... })`
        }))
        //.pipe(handlebars({
        //    outputType: 'browser'
        //}))
        .pipe(concat('ember-templates.js')) // make sure to only do concat after
        .pipe(gulp.dest('./front/templates'));
});


gulp.task('default', ['templates']);




