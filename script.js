const tags = ["spicy", "non-vegan", "mobile"];

const prices = [8.5, 4, 4.5, 12];

console.log(tags,prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for(let i = 0; i < tags.length; i++){
    tagText.textContent = tagText.textContent + tags[i] + " . ";
}