const body = document.getElementById("body");
const main = document.getElementById("main");
const newsTags = ["NOTÍCIA"];
const newsTitle = [
  "Ex-aluno Kenzie é contratado como engenheiro front-end pela Google",
  "Terremoto na Turquia: a adolescente resgatada após 10 dias sob escombros",
  "Seis escolas do Grupo Especial abrem os desfiles na Sapucaí neste domingo",
  "Ex-aluno Kenzie ganha na loteria e compra a empresa na qual se graduou",
];
const newsContent = [
  "Ex-aluno Marcelino Gutiérrez é contratado pela empresa poucos meses após a conclusão de seus estudos na Kenzie Academy Brasil.",
  "Uma adolescente foi resgatada cerca de 248 horas após o devastador terremoto da semana passada na Turquia. Aleyna Olmez, de 17 anos, foi retirada dos escombros em Kahramanmaraş, uma cidade do sul do país e próxima do epicentro do tremor.",
  "Seis escolas abrem neste domingo (19) as apresentações do Grupo Especial, no Sambódromo do Rio, no carnaval 2023. Cada escola terá entre 60 e 70 minutos para mostrar seu enredo na Avenida. O início dos desfiles está marcado para as 22h. ",
  "Neste 18 de fevereiro, ex-aluno Kenzie, Marcelino Gutierrez ganha na mega-sena da virada e compra a empresa a qual possibiltou-lhe a compra do próprio bilhete de lotérica.",
];
const newsSource = [
  "Fonte: Confia",
  "Fonte: BBC",
  "Fonte: G1",
  "Fonte: Confia",
];

/*============================================================================
=================================MAIN NEWS====================================
============================================================================*/
function showNews(i) {
  let mainNewsContainer = document.createElement("div");
  mainNewsContainer.className = "main-news-container";
  main.appendChild(mainNewsContainer);
  let mainImg = document.createElement("img");
  mainImg.className = "main-img";
  mainImg.src = `./newscovers/image${i}.png`;
  mainNewsContainer.appendChild(mainImg);
  let mainNewsTextContainer = document.createElement("div");
  mainNewsTextContainer.className = "news-text-container";
  mainNewsContainer.appendChild(mainNewsTextContainer);
  let mainTag = document.createElement("p");
  mainTag.className = "news-tag";
  mainTag.textContent = newsTags[0];
  mainNewsTextContainer.appendChild(mainTag);
  let mainNewsTitle = document.createElement("h1");
  mainNewsTitle.className = "news-title";
  mainNewsTitle.textContent = newsTitle[i];
  mainNewsTextContainer.appendChild(mainNewsTitle);
  let mainNewsContent = document.createElement("p");
  mainNewsContent.className = "news-content";
  mainNewsContent.textContent = newsContent[i];
  mainNewsTextContainer.appendChild(mainNewsContent);
  let mainNewsSource = document.createElement("p");
  mainNewsSource.className = "news-source";
  mainNewsSource.textContent = newsSource[i];
  mainNewsTextContainer.appendChild(mainNewsSource);
}

/*============================================================================
=================================ARTICLE NEWS=================================
============================================================================*/
for (i = 0; i < 4; i++) {
  let newsArticlesArea = document.querySelector(".news-articles");
  let article = document.createElement("article");
  newsArticlesArea.appendChild(article);
  let newsArticle = document.createElement("div");
  article.appendChild(newsArticle);
  newsArticle.className = "article-news-container";
  newsArticle.setAttribute("id", `article-${i}`);
  let articleImageContainer = document.createElement("div");
  articleImageContainer.className = "article-news-image-container";
  newsArticle.appendChild(articleImageContainer);
  let articleImg = document.createElement("img");
  articleImg.src = "./icons/kenzielogo.png";
  articleImageContainer.appendChild(articleImg);
  let articleNewsTextContainer = document.createElement("div");
  articleNewsTextContainer.className = "article-news-text-container";
  newsArticle.appendChild(articleNewsTextContainer);
  let articleTag = document.createElement("p");
  articleTag.className = "news-tag";
  articleTag.textContent = newsTags[0];
  articleNewsTextContainer.appendChild(articleTag);
  let articleNewsTitle = document.createElement("h1");
  articleNewsTitle.className = "news-title";
  articleNewsTitle.textContent = newsTitle[i];
  articleNewsTextContainer.appendChild(articleNewsTitle);
  let articleNewsSource = document.createElement("p");
  articleNewsSource.className = "news-source";
  articleNewsSource.textContent = newsSource[i];
  articleNewsTextContainer.appendChild(articleNewsSource);
}

//ADDED EVENTLISTENER INDIVIDUALLY
//I TRIED ADDING THEM DYNAMICALLY BUT I COULDN'T FIGURE OUT HOW
//REMEMBER TO ADD EVENTLISTENER DYNAMICALLY

let counter = 0;

document.getElementById("article-0").addEventListener("click", (e) => {
  const articleToBeDeleted = document.querySelector(".main-news-container");
  if (counter > 0) {
    articleToBeDeleted.remove();
    counter = 0;
  }
  counter++;
  showNews(0);

  window.scroll(0, 0);
});

document.getElementById("article-1").addEventListener("click", (e) => {
  const articleToBeDeleted = document.querySelector(".main-news-container");
  if (counter > 0) {
    articleToBeDeleted.remove();
    counter = 0;
  }
  counter++;
  showNews(1);
  window.scroll(0, 0);
});

document.getElementById("article-2").addEventListener("click", (e) => {
  const articleToBeDeleted = document.querySelector(".main-news-container");
  if (counter > 0) {
    articleToBeDeleted.remove();
    counter = 0;
  }
  counter++;
  showNews(2);

  window.scroll(0, 0);
});

document.getElementById("article-3").addEventListener("click", (e) => {
  const articleToBeDeleted = document.querySelector(".main-news-container");
  if (counter > 0) {
    articleToBeDeleted.remove();
    counter = 0;
  }
  counter++;
  showNews(3);
  window.scroll(0, 0);
});
