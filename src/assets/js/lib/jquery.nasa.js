(function () {
    var handleResult, url;
    url = 'https://api.nasa.gov/planetary/apod?concept_tags=True&api_key=jKWNN0zIj4ng6G0u0VI0GX2PXOHZfjor4k4A5CTP';
    handleResult = function (result) {
        if (result.media_type === 'video') {
            $('#apod_img_id').css('display', 'none');
            $('#apod_vid_id').attr('src', result.url);
        } else {
            $('#apod_vid_id').css('display', 'none');
            $('#apod_img_id').attr('src', result.url);
        }
        $('#reqObject').text(url);
        $('#returnObject').text(JSON.stringify(result, null, 4));
        $('#apod_explanation').text(result.explanation);
        $('#apod_title').text(result.title);
    };
    $.ajax({
        url: url,
        success: handleResult
    });
})();