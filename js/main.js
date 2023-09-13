body.style.backgroundColor = '#e5e5e5';



// Happiness & Mindfulness Number Counter Start
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".nums").forEach(num => {
    let cont = document.querySelector("#mindfulnesscontainer");
    var tler = gsap.from(num, {
        textContent: ` `,
        duration: 1,
        ease: "power1.inOut",
        modifiers: {
            textContent: value => formatNumber(value, 0)
        },
        scrollTrigger: {
            trigger: cont,
            start: "top 350px",
            toggleActions: "play none none reverse",
            end: "10000px",

        }
    });
})


function formatNumber(value, decimals) {
    let s = (+value).toLocaleString('en-US').split(".");
    return decimals ? s[0] + "." + ((s[1] || "") + "00000000").substr(0, decimals) : s[0];
}
// Happiness & Mindfulness Number Counter End




// Smooth Scroll Start
$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });
});
// Smooth Scroll End




