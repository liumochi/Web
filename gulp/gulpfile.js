/**
 * Created by Administrator on 2017/3/12.
 */
var gulp = require('gulp');
//����һ���������ն�д  gulp ������

gulp.task('test',function(){
   console.log('haha');
});

gulp.task('test2',function(){
    console.log('bbbb');
});

gulp.task('default',['test','test2']);
//���ƹ���
gulp.task('task1',function(){
    gulp.src('index.html').pipe(gulp.dest('dest'));
});

gulp.task('watch-html',function(){
    gulp.watch('index.html',['task1'])
});
gulp.task('img',function(){
    gulp.src('src/images/*.png').pipe(gulp.dest('dest/images'));
});
