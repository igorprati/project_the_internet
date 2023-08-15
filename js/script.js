let contentList = document.getElementsByClassName('content');
let listDates = ['1960', '1970', '1980', '1990', '2000'];

function mudarConteudo(date) {
    for(let i of contentList) {
        if(i.classList.contains('content-' + date)) {
            i.classList.remove('hidden');
            setTimeout(() => {
                i.classList.add('fade-in')
            }, 50)
        } else {
            i.classList.add('hidden')
            i.classList.remove('fade-in')
        }
    }
}

mudarConteudo('1960');