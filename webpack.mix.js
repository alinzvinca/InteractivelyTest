let mix = require('laravel-mix');

mix.options({
		processCssUrls: false
	})
	.js('resources/assets/js/app.js', 'public')
    .sass('resources/assets/sass/app.scss', 'public')
    .setPublicPath('public')
    .setResourceRoot('../public');