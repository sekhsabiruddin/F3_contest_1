// let img = document.getElementById("img");
// let title = document.getElementById("title");
// let price = document.getElementById("price");
// let off = document.getElementById("off");
// let stock = document.getElementById("stock");
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data["products"]);
    for (i = 0; i < data["products"].length; i++) {
      let container = document.getElementById("container");
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      // let imgBox = document.getElementById("imgBox");
      let imgBox = document.createElement("div");
      let dynamicImg = document.createElement("img");
      dynamicImg.setAttribute("src", data["products"][i].thumbnail);

      imgBox.setAttribute("class", "imgBox");

      imgBox.append(dynamicImg);

      let contentBox = document.createElement("div");

      contentBox.setAttribute("class", "contentBox");

      let title = document.createElement("h3");
      let price = document.createElement("h2");
      let off = document.createElement("p");
      let stock = document.createElement("p");

      title.innerHTML = data["products"][i].title;
      price.innerHTML = "Rs. " + data["products"][i].price + "/-";
      let span = document.createElement("span");
      off.setAttribute("class", "off");

      span.innerHTML = "save " + data["products"][i].discountPercentage + "%";
      stock.innerHTML = "Stcok : " + data["products"][i].stock;
      off.append(span);
      contentBox.append(title);
      contentBox.append(price);
      contentBox.append(off);
      contentBox.append(stock);

      card.append(imgBox);
      card.append(contentBox);
      container.append(card);
    }
  });
