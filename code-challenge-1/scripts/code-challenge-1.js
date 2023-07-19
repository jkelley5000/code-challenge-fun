document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', documentReady()) : documentReady();

function documentReady() {
    document.getElementById('previous-button').addEventListener('click', function () {
        document.getElementById('carousel').scrollLeft -= 300;
    });

    document.getElementById('next-button').addEventListener('click', function () {
        document.getElementById('carousel').scrollLeft += 300;
    });
};