(function () {
    var elements = document.querySelectorAll('.ellipsis'),
        intElemScrollHeight = 0,
        maxH = 0,
        maxWidth = 0;

    for (var elem of elements) {
        intElemScrollHeight = elem.scrollHeight;
        maxH = elem.offsetHeight;
        ellipsis(elem, intElemScrollHeight, maxH);
    }

    function ellipsis(elem, scrollHeight, clientHeight) {
        var maxHeight = clientHeight,
            text = elem.textContent.trim(),
            newText = '',
            array = text.split(' '),
            ellipsisArray = [],
            lastWordIndex = 0,
            lastSpan = '';

        if (scrollHeight > maxHeight) {
            newText = '<span>' + array.join('</span> <span>') + '</span> ';
            elem.innerHTML = newText;
            ellipsisArray = elem.children;
            array = [];
            for (var i = 0; i < ellipsisArray.length; i++) {
                if (ellipsisArray[i].offsetHeight + ellipsisArray[i].offsetTop <= elem.offsetHeight - ellipsisArray[0].offsetHeight && ellipsisArray[i].offsetLeft <= elem.offsetWidth) {
                    lastWordIndex = i;
                    array.push(ellipsisArray[i].textContent);
                }
            }
            for (var i = lastWordIndex + 1; i < ellipsisArray.length; i++) {
                lastSpan = lastSpan + ellipsisArray[i].textContent + ' ';
            }
            newText = '<span>' + array.join('</span> <span>') + '</span> ' + '<span class="nowrap">' + lastSpan + '</span> ';
            elem.innerHTML = newText;
        }
    }


} ());
