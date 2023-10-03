const chocolates = [
  {
    id: 1,
    name: "Milk Chocolate",
    price: 2.5,
    src: "https://thumbs.dreamstime.com/z/chocolate-mousse-5869740.jpg?w=992",
  },
  {
    id: 2,
    name: "Dark Chocolate",
    price: 3.0,
    src: "https://thumbs.dreamstime.com/z/chocolate-mousse-fresh-raspberries-white-bowl-horizontal-close-up-32644004.jpg?w=992",
  },
  {
    id: 3,
    name: "Milky bar",
    price: 4.0,
    src: "https://media.gettyimages.com/id/1394204312/photo/flying-chocolate-pieces-fresh-dark-brown-chocolate-fragments.jpg?s=2048x2048&w=gi&k=20&c=4Hcy-1EaBYo0IGs_MTDa9rdRqslMMkTP68RVqvacYIo=",
  },
  {
    id: 4,
    name: "Cocoa solid",
    price: 3.0,
    src: "https://thumbs.dreamstime.com/z/chocolate-mousse-tartlets-close-up-48854165.jpg?w=992",
  },
  {
    id: 5,
    name: "Cadbury",
    price: 6.0,
    src: "https://media.gettyimages.com/id/1209981764/photo/chocolate-chunks-frosting-and-cocao.jpg?s=2048x2048&w=gi&k=20&c=yQzi5tofn-bN5PolnypWlJ2TRdsvwHLguu2qSFIx3Sg=",
  },
  {
    id: 6,
    name: "Twix",
    price: 5.0,
    src: "https://media.gettyimages.com/id/183255573/photo/chocolate-collection-on-a-silk-ackground.jpg?s=2048x2048&w=gi&k=20&c=unhpgrMSkY77zl3tOv6YHucEXpInfY_Om1zj8E7EhvY=",
  },
  {
    id: 7,
    name: "Ruby",
    price: 10.0,
    src: "https://media.gettyimages.com/id/1287486309/photo/chocolate-frosting-being-poured-onto-chocolate-cake-with-pink-background.jpg?s=1024x1024&w=gi&k=20&c=u3Q6zd-7wgHPPf8tuke23DR4YdrycDXf32VFyZHN6O4=",
  },
  {
    id: 8,
    name: "Kit Kat",
    price: 4.0,
    src: "https://media.gettyimages.com/id/131549968/photo/chocolate-candy-in-heart-shaped-box.jpg?s=2048x2048&w=gi&k=20&c=t8jCu9_wuBLtJkuop6dqfCBEZRsCAuAo5Jup2x0_VYI=",
  },
  {
    id: 9,
    name: "Aero",
    price: 8.0,
    src: "https://media.gettyimages.com/id/85784543/photo/chocolate-box-full-of-assorted-chocolates.jpg?s=2048x2048&w=gi&k=20&c=L3uCJs-B0Pds8GL-AxLrsTJrML-IQc6qBuLZnbYP7T8=",
  },
  {
    id: 10,
    name: "Amul",
    price: 7.0,
    src: "https://media.gettyimages.com/id/1300099757/photo/dark-chocolate-bar-dip-in-melted-chocolate.jpg?s=2048x2048&w=gi&k=20&c=bDjtp0-UJCQI_bIw5nDxgx2HhJz0_sD_1EVECZa82Ks=",
  },
  {
    id: 11,
    name: "Campco",
    price: 9.0,
    src: "https://media.gettyimages.com/id/82878799/photo/stacked-chocolate-chunks.jpg?s=2048x2048&w=gi&k=20&c=wtWXdNOz_ZU9zt8m2Jz2UFaFeJV_nQCTgie6qSbxVNI=",
  },
  {
    id: 12,
    name: "Barone",
    price: 6.0,
    src: "https://media.gettyimages.com/id/1267076689/photo/valentines-day-box-of-chocolates-and-red-roses.jpg?s=2048x2048&w=gi&k=20&c=betPaoRfZQ5akDrIMiz0N4lxa7WlF3ov7t9RIPbsv0E=",
  },
  {
    id: 13,
    name: "ButterFinger",
    price: 5.0,
    src: "https://media.gettyimages.com/id/1088417240/photo/assorted-chocolate-nuts-and-dried-fruit-in-old-fashioned-style.jpg?s=2048x2048&w=gi&k=20&c=tgOumbsMTRjfba8vn-NVAWmJv18ZSmSQGKNPUzph4qc=",
  },
  {
    id: 14,
    name: "Hershey",
    price: 2.0,
    src: "https://media.gettyimages.com/id/88436066/photo/chocolates.jpg?s=2048x2048&w=gi&k=20&c=vk97xt-yAlCiaXpGtJEEmqknXu1-BEMsiZczQanecm4=",
  },
  {
    id: 15,
    name: "Snickers",
    price: 1.0,
    src: "https://media.gettyimages.com/id/1189235789/photo/chocolate-mousse-desserts-concept.jpg?s=2048x2048&w=gi&k=20&c=Cj3movETaXBnVP3cVW3qU6lFukYCh7nIE3dwob92haI=",
  },
  {
    id: 16,
    name: "Ferrero Rocher",
    price: 8.0,
    src: "https://plus.unsplash.com/premium_photo-1663047314541-5b9e07f5836b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    id: 17,
    name: "Mars Chocolates",
    price: 5.0,
    src: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80",
  },
  {
    id: 18,
    name: "Lotus Chocolates",
    price: 11.0,
    src: "https://plus.unsplash.com/premium_photo-1675857197756-6b952b13a929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1829&q=80",
  },
  {
    id: 19,
    name: "Parle Chocolates",
    price: 9.0,
    src: "https://images.unsplash.com/photo-1582176604856-e824b4736522?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
  },
  {
    id: 20,
    name: "Nestle Chocolates",
    price: 4.0,
    src: "https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    id: 21,
    name: "Sweet German Chocolate",
    price: 3.0,
    src: "https://images.unsplash.com/photo-1545015451-f05567aa6bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
];

const maxItemsInCustomPack = 8;
let customPack = [];
let totalPrice = 0;

function updateTotalPrice() {
  const totalDisplay = document.getElementById("total-price");
  totalDisplay.textContent = `$${totalPrice.toFixed(2)}`;
}

function addToCustomPack(chocolate) {
  if (customPack.length < maxItemsInCustomPack) {
    customPack.push(chocolate);
    totalPrice += chocolate.price;
    updateTotalPrice();
    updateCustomPackList();
  } else {
    alert("You have reached max limit of 8 chocolate");
  }
}

function removeFromCustomPackByIndex(index) {
  if (index >= 0 && index < customPack.length) {
    const removedChocolate = customPack.splice(index, 1)[0];
    totalPrice -= removedChocolate.price;
    updateTotalPrice();
    updateCustomPackList();
  }
}

function updateCustomPackList() {
  const customPackList = document.getElementById("custom-pack-list");
  customPackList.innerHTML = "";
  customPack.forEach((chocolate, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () =>
      removeFromCustomPackByIndex(index)
    );
    listItem.appendChild(removeButton);
    customPackList.appendChild(listItem);
  });
}

function createChocolateItems() {
  const chocolateContainer = document.querySelector(".chocolate-container");
  chocolates.forEach((chocolate) => {
    const chocolateItem = document.createElement("div");
    chocolateItem.classList.add("chocolate-item");
    const image = document.createElement("img");
    image.src = chocolate.src;
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Pack";
    addButton.addEventListener("click", () => addToCustomPack(chocolate));
    chocolateItem.appendChild(image);
    chocolateItem.appendChild(document.createElement("br"));
    chocolateItem.appendChild(document.createTextNode(chocolate.name));
    chocolateItem.appendChild(document.createElement("br"));
    chocolateItem.appendChild(
      document.createTextNode(`$${chocolate.price.toFixed(2)}`)
    );
    chocolateItem.appendChild(document.createElement("br"));
    chocolateItem.appendChild(addButton);
    chocolateContainer.appendChild(chocolateItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createChocolateItems();
  updateTotalPrice();
  updateCustomPackList();
});
