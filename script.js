var pricing = $(".pricing");

pricing.on("click", function() {
    pricing.removeClass("pricing-select")
    $(this).addClass("pricing-select");
})