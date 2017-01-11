var gulp = require('gulp');
var replace = require('gulp-replace');
var htmlreplace = require('gulp-html-replace');

var config = {
    publicDir: './public',
		T4Dir: './T4',
};

gulp.task('t4_media', function() {
	//get styles.css in publicDir
	gulp.src(config.publicDir)
	//social-icons
	.pipe(replace('("http://www.luc.edu/media/home/images/social-icons-logos-33-070714.png")', '("<t4 type="media" id="233455" formatter="path/*"/>")'))	
	//background image
	.pipe(replace('("../images/bg-water.jpg")', '("<t4 type="media" id="372435" formatter="path/*"/>")'))	
	//semi-transparent-pixel
	.pipe(replace('("<t4 type="media" id="406288" formatter="path/*"/>")', '("<t4 type="media" id="406288" formatter="path/*"/>")'))
	//ANTENNA FONTS	
	//antenna regular
	.pipe(replace('("antenna_regular/476def8b-6379-4133-9503-ca290c126397-4.svg")', '("<t4 type="media" id="309115" formatter="path/*"/>")'))
	.pipe(replace('("antenna_regular/476def8b-6379-4133-9503-ca290c126397-2.eot")', '("<t4 type="media" id="309117" formatter="path/*"/>")'))
	.pipe(replace('("antenna_regular/476def8b-6379-4133-9503-ca290c126397-3.woff")', '("<t4 type="media" id="309116" formatter="path/*"/>")'))
	.pipe(replace('("antenna_regular/476def8b-6379-4133-9503-ca290c126397-1.ttf")', '("<t4 type="media" id="309118" formatter="path/*"/>")'))
	//antenna bold
	.pipe(replace('("antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-4.svg")', '("<t4 type="media" id="375084" formatter="path/*"/>")'))
	.pipe(replace('("antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-2.eot")', '("<t4 type="media" id="375082" formatter="path/*"/>")'))
	.pipe(replace('("antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-3.woff")', '("<t4 type="media" id="375083" formatter="path/*"/>")'))
	.pipe(replace('("antenna_bold/692e9d98-a1c5-4d26-9831-b7f258241cdf-1.ttf")', '("<t4 type="media" id="375081" formatter="path/*"/>")'))
	//antenna black
	.pipe(replace('("antenna_black/6620971b-19a1-4157-9796-83671a1c7836-4.svg")', '("<t4 type="media" id="309109" formatter="path/*"/>")'))
	.pipe(replace('("antenna_black/6620971b-19a1-4157-9796-83671a1c7836-2.eot")', '("<t4 type="media" id="309111" formatter="path/*"/>")'))
	.pipe(replace('("antenna_black/6620971b-19a1-4157-9796-83671a1c7836-3.woff")', '("<t4 type="media" id="309110" formatter="path/*"/>")'))
	.pipe(replace('("antenna_black/6620971b-19a1-4157-9796-83671a1c7836-1.ttf")', '("<t4 type="media" id="309112" formatter="path/*"/>")'))
	//antenna light
	.pipe(replace('("antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-4.svg")', '("<t4 type="media" id="375116" formatter="path/*"/>")'))
	.pipe(replace('("antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-2.eot")', '("<t4 type="media" id="375114" formatter="path/*"/>")'))
	.pipe(replace('("antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-3.woff")', '("<t4 type="media" id="375115" formatter="path/*"/>")'))
	.pipe(replace('("antenna_light/749b4993-dc71-4e94-aab9-74b89be2ca19-1.ttf")', '("<t4 type="media" id="375113" formatter="path/*"/>")'))
	//antenna thin
	.pipe(replace('("antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-4.svg")', '("<t4 type="media" id="375089" formatter="path/*"/>")'))
	.pipe(replace('("antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-2.eot")', '("<t4 type="media" id="375087" formatter="path/*"/>")'))
	.pipe(replace('("antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-3.woff")', '("<t4 type="media" id="375088" formatter="path/*"/>")'))
	.pipe(replace('("antenna_thin/eeb94438-f886-4973-b3fe-70d47d3d56e5-1.ttf")', '("<t4 type="media" id="375086" formatter="path/*"/>")'))
	//change references	in html
	.pipe(replace('/css/styles.css', '<t4 type="media" id="444511" formatter="path/*"/>'))
	.pipe(replace('/js/all.min.js', '<t4 type="media" id="444527" formatter="path/*"/>'))
	.pipe(htmlreplace({
		'globalquicklinks': '<t4 type="media" id="77813" formatter="plain/text"/>',       
	}, {
  keepUnassigned: false,
  keepBlockTags: true,
  resolvePaths: false
}))
	//send to t4Dir
	.pipe(gulp.dest(config.T4Dir));
});

//gulp.task('reference-replace', function() {
//	gulp.src(config.T4Dir + '/*.html')
//	.pipe(htmlreplace({
//		'js-reference': '<!-- <script src="/js/all.js"></script> --> <script src="/js/all.min.js"></script>',
//	}))
//	.pipe(gulp.dest(config.T4Dir));
//});