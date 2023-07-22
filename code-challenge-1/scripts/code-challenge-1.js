document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', documentReady()) : documentReady();

function documentReady() {
    const carousel = document.getElementById('carousel');
    const carouselHTML = document.getElementById('carousel').innerHTML;

    document.getElementById('previous-button').addEventListener('click', function () {
        let carouselItems = document.getElementsByClassName('carousel-item');
        let carouselItemsToAdjustForRendering = [];
        for (let i = 0; i < carouselItems.length; i++) {
            carouselItemsToAdjustForRendering.push(carouselItems[i]);
        }
        if (carousel.scrollLeft === 0) {
            if (carouselItemsToAdjustForRendering.length >= 8) {
                for (let i = 0; i < 4; i++) {
                    carouselItemsToAdjustForRendering.pop();
                }
                carousel.innerHTML = '';
                carouselItemsToAdjustForRendering.forEach(function (item) {
                    carousel.innerHTML += item.outerHTML;
                });
            } else {
                carousel.innerHTML += carouselHTML;
            }
            carousel.scrollLeft = 900;
        } else {
            carousel.scrollLeft -= 300;
        }
    });

    document.getElementById('next-button').addEventListener('click', function () {
        let carouselItems = document.getElementsByClassName('carousel-item');
        let carouselItemsToAdjustForRendering = [];
        for (let i = 0; i < carouselItems.length; i++) {
            carouselItemsToAdjustForRendering.push(carouselItems[i]);
        }
        if (carousel.scrollLeft === 900) {
            if (carouselItemsToAdjustForRendering.length >= 8) {
                for (let i = 0; i < 4; i++) {
                    carouselItemsToAdjustForRendering.shift();
                }
                carousel.innerHTML = '';
                carouselItemsToAdjustForRendering.forEach(function (item) {
                    carousel.innerHTML += item.outerHTML;
                });
            } else {
                carousel.innerHTML += carouselHTML;
            }
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft += 300;
        }
    });
};