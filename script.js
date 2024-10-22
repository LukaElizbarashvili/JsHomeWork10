const inputItem = document.getElementById("Filter");
const inputResult = document.getElementById("result");
let listItems = [];

// Get the Api
async function asyncFnc() {
    const url = await fetch("https://api.disneyapi.dev/character");
    try {
        if (!url.ok) {
            throw new Error("Can not recieve data");
        }
        const mosuliData = await url.json();
        mosuliData.data.forEach((element) => {
          const li = document.createElement("li");
          li.textContent = `${element.name}`;
          let img = document.createElement("img");
          img.src = element.imageUrl;
          li.appendChild(img);
          listItems.push(li);
    
          inputResult.appendChild(li);
        });
      } catch (e) {
        console.log(e);
      }
}
asyncFnc();


// filter
function filterFnc(searchItem) {
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
}
inputItem.addEventListener("keyup", function () {
    filterFnc(this.value);
});
try {
  
} catch (error) {
  
}
