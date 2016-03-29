$.ajax({
    url: "images",
    success: function(data) {
        var images = new Array();
        $(data).find("a:contains(.jpg)").each(function() {
            // will loop through
            var imageName = $(this).attr("href");
            images.push(imageName);

        });
        var imagePath = 'images/' + images[Math.floor(Math.random() * images.length)];
        $('#start-img').attr('src', imagePath);
    }
});
