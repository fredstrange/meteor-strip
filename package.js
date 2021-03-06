Package.describe({
  name: 'fredstrange:strip',
  summary: 'A Less Intrusive Responsive Lightbox',
  version: '1.2.3',
  git: 'https://github.com/fredstrange/meteor-strip.git'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');

    api.use(['jquery'], ['client']);;

    api.add_files(["strip/js/strip.pkgd.js", "strip/css/strip.css"], "client");

    var assetPath = 'strip/css/strip-skins/strip/'
    var assetFiles = [
        assetPath + 'close.png',
        assetPath + 'close.svg',
        assetPath + 'error.png',
        assetPath + 'error.svg',
        assetPath + 'next.png',
        assetPath + 'next.svg',
        assetPath + 'next-hover.png',
        assetPath + 'next-small.png',
        assetPath + 'next-small.svg',
        assetPath + 'next-small-hover.png',
        assetPath + 'previous.png',
        assetPath + 'previous.svg',
        assetPath + 'previous-hover.png',
        assetPath + 'previous-small.png',
        assetPath + 'previous-small.svg',
        assetPath + 'previous-small-hover.png'
    ];

    api.add_files(assetFiles, "client");
});
