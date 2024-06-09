<script>
    const videoId = 'nwAzyAGkkZ0'; // Это новый ID видео из вашей ссылки на YouTube
    YT.ready(_ => {
        window.player = new YT.Player('player', {
            videoId: videoId,
            playerVars: {
                autoplay: 1, // Автозапуск видео
                controls: 0,
                loop: 1,
                playlist: videoId
            },
            events: {
                onReady: e => {
                    e.target.setVolume(25);
                }
            }
        });
    });

    // Убедимся, что предзагрузчик скрывается
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        const preloaderItemLoading = document.querySelector('.preloader-item-loading');
        const preloaderItem = document.querySelector('.preloader-item');

        // Показать "click" после "wait"
        setTimeout(() => {
            preloaderItemLoading.classList.add('loaded');
            preloaderItem.classList.add('loaded');
            preloader.classList.add('show-background'); // Показать задний фон
        }, 3000); // Задержка для показа "click" после "wait"

        // При клике на "click"
        preloaderItem.addEventListener('click', () => {
            preloaderItem.classList.add('clicked');
            preloader.classList.add('clicked');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1300); // Убедитесь, что это совпадает с временем перехода в CSS
        });
    });
</script>
