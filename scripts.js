
var links = ['https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U',
    'https://www.youtube.com/embed/dOgBUAn6x9U']
for (let i = 0; i <links.length ; i++) {
    document.getElementById('iframe'+i).src = links[i];
}

