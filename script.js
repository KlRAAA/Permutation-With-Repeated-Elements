function generateOutfits() {
  const tops = document
    .getElementById("tops")
    .value.split(",")
    .map((item) => item.trim());
  const bottoms = document
    .getElementById("bottoms")
    .value.split(",")
    .map((item) => item.trim());
  const shoes = document
    .getElementById("shoes")
    .value.split(",")
    .map((item) => item.trim());
  const accessories = document
    .getElementById("accessories")
    .value.split(",")
    .map((item) => item.trim());
  const filter = document.getElementById("filter").value;

  let outfitList = document.getElementById("outfitList");
  outfitList.innerHTML = "";

  const casualItems = {
    tops: [
      "Black t-shirt",
      "t-shirt",
      "Blue sweater",
      "Graphic t-shirt",
      "Hoodie",
      "Casual button-up shirt",
      "Tank top",
      "Flannel shirt",
      "Short-sleeve button-up",
      "Long-sleeve t-shirt",
      "Crewneck sweatshirt",
      "Belted shirt dress",
      "Polo shirt",
      "Denim jacket",
      "Sweater",
      "Sando",
      "White t-shirt",
      "Henley shirt",
      "V-neck t-shirt",
      "Baseball tee",
      "Bomber jacket",
      "Varsity jacket",
      "Denim vest",
      "Chambray shirt",
      "Raglan shirt",
      "Oversized hoodie",
      "Graphic sweatshirt",
      "Windbreaker",
      "Crop top",
      "Striped t-shirt",
      "Corduroy jacket",
      "Knit cardigan",
    ],
    bottoms: [
      "Jeans",
      "Shorts",
      "Chinos",
      "Joggers",
      "Cargo pants",
      "Sweatpants",
      "Skorts",
      "Leggings",
      "Trousers",
      "Culottes",
      "Capri pants",
      "Distressed jeans",
      "Cargo shorts",
      "Sweat shorts",
      "Track pants",
      "Overalls",
      "Denim shorts",
      "Bermuda shorts",
      "Corduroy pants",
      "Ripped skinny jeans",
      "Loose-fit jeans",
      "Athletic pants",
    ],
    shoes: [
      "Sneakers",
      "Flip flops",
      "Loafers",
      "Canvas shoes",
      "Ankle boots",
      "Slides",
      "Chelsea boots",
      "High-top sneakers",
      "Moccasins",
      "Platform shoes",
      "Crocs",
      "Nikes",
      "Pandas",
      "Samba",
      "Skate shoes",
      "Slip-on sneakers",
      "Running shoes",
      "Hiking boots",
      "Desert boots",
      "Low-top sneakers",
      "Espadrilles",
      "Boat shoes",
      "Clogs",
      "Leather sandals",
      "Tennis shoes",
      "Sliders",
    ],
  };

  const formalItems = {
    tops: [
      "White shirt",
      "Light blue dress shirt",
      "Black dress shirt",
      "Polo shirt",
      "Dress blazer",
      "Pinstriped shirt",
      "Silk blouse",
      "Turtleneck sweater",
      "Crisp white turtleneck",
      "Sleeveless blouse",
      "Silk camisole",
      "Velvet blazer",
      "Lace blouse",
      "Sequin top",
      "Sheer blouse",
      "Peplum top",
      "Ruffle shirt",
      "Satin wrap top",
      "Embellished blazer",
      "Cropped blazer",
      "Fitted cardigan",
      "Chiffon blouse",
      "Embroidered dress shirt",
      "Velvet dress shirt",
      "Lace turtleneck",
    ],
    bottoms: [
      "Black trousers",
      "Navy trousers",
      "Gray slacks",
      "Khaki dress pants",
      "Formal shorts",
      "Pleated skirt",
      "A-line skirt",
      "Pencil skirt",
      "Tailored trousers",
      "Dressy culottes",
      "Pinstripe trousers",
      "Cropped dress pants",
      "Wide-leg trousers",
      "Tapered dress pants",
      "High-waist dress pants",
      "Palazzo pants",
      "Satin skirt",
      "Tiered skirt",
      "Maxi skirt",
      "Velvet pencil skirt",
      "Wrap skirt",
    ],
    shoes: [
      "Formal shoes",
      "Oxfords",
      "Brogues",
      "Dress boots",
      "Loafers",
      "Derby shoes",
      "Pointed-toe heels",
      "Wedge heels",
      "Dress sandals",
      "Cap-toe shoes",
      "Black shoes",
      "Flat shoes",
      "Slingback heels",
      "Peep-toe heels",
      "Court shoes",
      "Kitten heels",
      "Platform heels",
      "Ankle strap heels",
      "Patent leather shoes",
      "Stilettos",
      "Satin pumps",
      "Embellished sandals",
      "Ballet flats",
      "Metallic loafers",
      "Chunky heels",
    ],
  };
  for (let top of tops) {
    for (let bottom of bottoms) {
      for (let shoe of shoes) {
        for (let accessory of accessories) {
          if (filter === "casual") {
            if (
              !casualItems.tops.includes(top) ||
              !casualItems.bottoms.includes(bottom) ||
              !casualItems.shoes.includes(shoe)
            ) {
              continue;
            }
          } else if (filter === "formal") {
            if (
              !formalItems.tops.includes(top) ||
              !formalItems.bottoms.includes(bottom) ||
              !formalItems.shoes.includes(shoe)
            ) {
              continue;
            }
          }

          let outfit = `${top} + ${bottom} + ${shoe} + ${accessory}`;
          let listItem = document.createElement("li");
          listItem.textContent = outfit;
          outfitList.appendChild(listItem);
        }
      }
    }
  }
  document.getElementById("regenerateButton").style.display = "inline-block";
}
