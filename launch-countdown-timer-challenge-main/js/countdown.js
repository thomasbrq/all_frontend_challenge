let toDate = new Date("Mar 20, 2021 17:00:00").getTime();

var x = setInterval(function () {
    let dateNow = new Date();

    let diff = toDate - dateNow;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $('.days').html(days);
    $('.hours').html(hours);
    $('.minutes').html(minutes);
    $('.seconds').html(seconds);

    if (distance < 0) {
        clearInterval(x);
        $('.countdown').html("Anniversaire!");
    }
}, 1000);