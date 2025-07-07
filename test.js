// ==UserScript==
// @name         My Custom Source
// @version      1.0
// @description  Источник для Lampa
// ==/UserScript==

(function () {
    function manifest() {
        return {
            version: '1.0',
            name: 'Мой источник',
            author: 'Evgeniy2074',
            description: 'Тестовый источник через GitHub Pages',
            type: 'video',
            url: 'https://Evgeniy2074.github.io/myplugin_source.js',
            status: true,
            premium: false
        };
    }

    Lampa.Source.add({
        name: 'Мой источник',
        version: '1.0',
        author: 'Evgeniy2074',
        type: 'video',
        active: true,
        proxy: false,
        executable: true,
        url: 'myplugin_source',
        manifest: manifest,
        search: function (query, year, type) {
            return [
                {
                    title: 'Тестовое видео',
                    url: 'https://example.com/stream.mp4',
                    quality: 'HD',
                    info: 'Описание',
                    poster: 'https://via.placeholder.com/150'
                }
            ];
        }
    });
})();

