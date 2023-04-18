const cantores = [
    {
        photo: "https://api.varelanet.com.br/fotos/varela_noticias/24724/FOTO_NOTICIA_2.jpg?v=dd548414fc8cf13ca07291c0adc1e584",
        name: "O polêmico",
        style: "Pagode baiano",
        number: 23
    },
    {
        photo: "https://imagens1.ne10.uol.com.br/blogsne10/social1/uploads/2012/02/luiz_caldas.jpg",
        name: "O rei do axé",
        style: "Axé music", 
        number: 77
    },
    {
        photo: "https://s2.glbimg.com/o0KmyDxW9lvyfzisuH6vaYhQh7Q=/e.glbimg.com/og/ed/f/original/2022/02/23/whatsapp_image_2022-02-23_at_23.27.41_1.jpeg",
        name: "Claudia Leitte",
        style: "Axé",
        number: 25
    },
    {
        photo: "https://lastfm.freetls.fastly.net/i/u/ar0/ef0e63b189e0155bf24f4268cf3bf6de.jpg",
        name: "Ivete Sangalo",
        style: "Axé",
        number: 26
    },
    {
        photo: "https://cdn.pensador.com/img/authors/sa/ul/saulo-fernandes-l.jpg",
        name: "Saulo",
        style: "Axé",
        number: 27
    }
];

const viewScreen = document.querySelector(".view__screen");
const mainContainer = document.querySelector(".container__results__main");

let selectedSinger = null;

function addNumber(number) {
    if (viewScreen.innerHTML.length < 2) {
        viewScreen.innerHTML += number;
        if (viewScreen.innerHTML.length == 2) {
            selectedSinger = cantores.find(cantor => cantor.number == Number(viewScreen.innerHTML));
            if (selectedSinger) {
                viewScreen.style.color = "#FFF";
                viewScreen.style.backgroundImage = `url(${selectedSinger.photo})`;
                viewScreen.style.backgroundSize = "cover";
            } else {
                viewScreen.style.color = "#F00";
                viewScreen.style.backgroundImage = "";
            }
        }
    }
}

function resetNumber() {
    viewScreen.innerHTML = "";
    viewScreen.style.color = "#FFF";
    viewScreen.style.backgroundImage = "";
    selectedSinger = null;
}

function whiteButton() {
    mainContainer.innerHTML = `<h2>Voto em branco</h2>`;
    resetNumber();
}

function confirmButton() {
    if (selectedSinger) {
        mainContainer.innerHTML = `<h2>Voto em ${selectedSinger.name}</h2><p>Estilo: ${selectedSinger.style}</p>`;
        resetNumber();
    } else {
        alert("Número de candidato inválido.");
    }
}
