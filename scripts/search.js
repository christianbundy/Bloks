document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return;
    }
    if (event.key === 'Enter') {
        processSearch(document.getElementById('searchInput').value);
        event.preventDefault();
        return false;
    }
    return;
});

function processSearch(input) {
    let query = input.trim().split(' ');
    let searchEngine = 'https://duckduckgo.com/?q=';

    if (query[0].charAt(0) === '!') {
        searchEngine = matchBang(query[0]);
        query = query.slice(1);
    }

    let url = searchEngine + encodeURIComponent(query.join(' '));
    console.log(url);
    window.location.href = url;
}

function matchBang(bangCode) {
    switch (bangCode) { 
        case '!g':
            return 'https://www.google.com/search?q=';
        case '!y':
            return 'https://www.youtube.com/results?search_query=';
        case '!a':
            return 'https://smile.amazon.com/s/field-keywords=';
        case '!r':
            return 'https://www.reddit.com/search?q=';
        case '!m':
            return 'https://medium.com/search?q=';
        default:
            return 'https://duckduckgo.com/?q=';
    }
}