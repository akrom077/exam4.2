
 
let elBox = document.querySelector("#box")
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then(res2 => res2.forEach(comments => {
    //elementlar
    const elItem = document.createElement("li")
    const elId = document.createElement("p");
    const elTitle = document.createElement("h1")
    const elPrice = document.createElement("p")
    const elDescription = document.createElement("p")
    const elCategory = document.createElement("p")
    const elImage = document.createElement("img")
    const elRating = document.createElement("p")
    const elDelete = document.createElement("button")
    const elIconc = document.createElement("img")
 

    //malumotlar
    elItem.classList.add("list-item")
    elId.textContent = comments.id;
    elTitle.textContent = "Name: "+comments.title.slice(0,20) + "...";
    elTitle.classList.add("h1")
    elPrice.textContent = `Price: ${comments.price}`;
    elDescription. textContent = "Desc: "+comments.description.slice(0,47) + "...";
    elDescription.classList.add("des")
    // elCategory.textContent =comments.category;
    elImage.src = comments.image
    elImage.classList.add("img")
    elRating.textContent = "Discount: "+comments.rating.rate 
    elIconc.src = "delet.svg"
    elIconc.classList.add("iconc")
    elDelete.classList.add("./img/delete.svg")
    elDelete.setAttribute("type","button")
    elDelete.setAttribute("data-toggle","modal")
    elDelete.setAttribute("data-target","#exampleModal")



    //natija
    elDelete.append(elIconc)
    elItem.append(elImage,elPrice,elRating,elDescription,elTitle,elDelete)
    // elBox.appendChild(elId);
    // elBox.appendChild(elTitle);
    // elBox.appendChild(elPrice);
    // elBox.appendChild(elDescription)
    // elBox.appendChild(elCategory)
    // elBox.appendChild(elImage)
    elBox.appendChild(elItem)

    
  }))