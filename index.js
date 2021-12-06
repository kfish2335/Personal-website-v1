// detect scroll top or down
// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function () {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        } else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

//Video section
//Desktop
document.getElementById('video1').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe src="https://www.youtube.com/embed/3qGC7uEHXN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
document.getElementById('videolink1').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe src="https://www.youtube.com/embed/3qGC7uEHXN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
document.getElementById('video2').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe  width="560" height="315" src="https://www.youtube.com/embed/zDq4IFAUYIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
document.getElementById('videolink2').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe  width="560" height="315" src="https://www.youtube.com/embed/zDq4IFAUYIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
document.getElementById('video5').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vwnHhXV8YLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
document.getElementById('videolink5').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vwnHhXV8YLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })

//Mobile
document.getElementById('video3').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe src="https://www.youtube.com/embed/3qGC7uEHXN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })

document.getElementById('video3').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe src="https://www.youtube.com/embed/3qGC7uEHXN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })

document.getElementById('videolink3').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe src="https://www.youtube.com/embed/3qGC7uEHXN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })

document.getElementById('video4').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zDq4IFAUYIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
    document.getElementById('videolink4').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zDq4IFAUYIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
document.getElementById('video6').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vwnHhXV8YLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
    document.getElementById('videolink6').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'flex';
        document.getElementById("background").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/vwnHhXV8YLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
//exit video
document.getElementById('background').addEventListener('click',
    function () {
        document.querySelector('.bg-modal').style.display = 'none';
        document.getElementById("video").remove();
    })


//fade-in animation

function fade_in() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top + 200;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
};

fade_in()

//mobile menu
document.getElementById('showmenu').addEventListener('click',
    function () {
        document.querySelector('.side_navbar').style.display = 'flex';
    })

document.getElementById('turnoff').addEventListener('click',
    function () {
        document.querySelector('.side_navbar').style.display = 'none';
    })

//scrollspy

$('body').scrollspy({
    target: '#navbar',
    offset: 350
})