const generateMemeBtn = document.querySelector(".meme-generator .generate-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title"); // Fix the class name
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url); // Use setAttribute instead of Attribute
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        })
        .catch((error) => {
            console.error("Error fetching meme:", error);
            updateDetails("", "Error fetching meme", "");
        });
};

generateMemeBtn.addEventListener("click", generateMeme);
