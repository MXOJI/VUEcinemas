module.exports = () =>
    $.gulp.task('video', () => //ставим задачу галпу что делать с img
        $.gulp.src($.path.src.video) // откуда взять
            .pipe($.gulp.dest($.path.build.video)).on('end', $.bs.reload))
            //куда положить