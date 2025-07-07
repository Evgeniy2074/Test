// ==UserScript==
// @name         MySource
// @version      1.0
// @description  Пример источника для Lampa
// ==/UserScript==

(function () {
    function manifest() {
        return {
            version: '1.0',
            name: 'MySource',
            author: 'Evgeniy2074',
            description: 'Тестовый источник через GitHub Pages',
            type: 'video',
            url: 'https://Evgeniy2074.github.io/test.js',
            status: true
        };
    }

    Lampa.Source.add({
        name: 'MySource',
        version: '1.0',
        author: 'Evgeniy2074',
        type: 'video',
        active: true,
        proxy: false,
        executable: true,
        url: 'mysource',
        manifest: manifest,
        search: function (query, year, type) {
            return [
                {
                    title: 'Тестовое видео',
                    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    quality: 'HD',
                    info: 'Big Buck Bunny (тест)',
                    poster: 'https://via.placeholder.com/300x450?text=Test'
                }
            ];
        }
    });
})();
