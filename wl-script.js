function handleUrlRequests(){
    var w = 800, h = 600;
        var left = Math.max((screen.width - w) / 2, 0);
        var top = Math.max((screen.height - h) / 2, 0);
            var features = 'noopener,noreferrer,' +
        'toolbar=no,location=no,status=no,menubar=no,' +
        'scrollbars=yes,resizable=yes,' +
        'width=' + w + ',height=' + h + ',top=' + top + ',left=' + left;


    $('h4 a').click(function(e){                          
    clickCount++;                                    
    e.preventDefault(); 
    var popupUrl = 'popup.html';
    var popupName = 'popupWindow';
    var articleTitle = $.trim($(this).text());
    var articleUrl = $(this).attr('href');
    var popupWithParams = popupUrl + '?clickCount=' + encodeURIComponent(clickCount) + '&url=' + encodeURIComponent(articleUrl);
    if( clickCount >= 3 ){ //if clickCount is more than 3 , the popup will show a progress bar. change here to adjust the click count
        window.open(popupWithParams, popupName, features);
    }
    else{
        window.open(articleUrl, popupName, features);
    }
    
    
});
}
