fetch("data.js")
  .then(res => res.json())
  .then(items => {

    // Swallow
    const swallowList = document.getElementById("swallow-list");
    if(swallowList) {
      items.filter(i => ["Amala","Eba&Soup","Semo"].includes(i.name))
           .forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3 class="item-name">${item.name}</h3>
                          <p class="item-price">₦1000</p>`;
        swallowList.appendChild(card);
      });
    }

    // Soup
    const soupList = document.getElementById("soup-list");
    if(soupList) {
      items.filter(i => ["Egusi"].includes(i.name))
           .forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3 class="item-name">${item.name}</h3>
                          <p class="item-price">₦2000</p>`;
        soupList.appendChild(card);
      });
    }

    // Others
    const othersList = document.getElementById("others-list");
    if(othersList) {
      items.filter(i => ["Popcorn","Small Chops","Indomie + Egg","RICE"].includes(i.name))
           .forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3 class="item-name">${item.name}</h3>
                          <p class="item-price">₦${item.price}</p>`;
        othersList.appendChild(card);
      });
    }

    // Protein
    const proteinList = document.getElementById("protein-list");
    if(proteinList) {
      items.filter(i => ["Chicken","Turkey","Meat","cowtail"].includes(i.name))
           .forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3 class="item-name">${item.name}</h3>
                          <p class="item-price">₦${item.price}</p>`;
        proteinList.appendChild(card);
      });
    }

    

    // Drinks
    const drinkList = document.getElementById("drink-list");
    if(drinkList) {
      items.filter(i => i.category === "drink").forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3 class="item-name">${item.name}</h3>
                          <p class="item-price">₦${item.price}</p>`;
        drinkList.appendChild(card);
      });
    }

  });
