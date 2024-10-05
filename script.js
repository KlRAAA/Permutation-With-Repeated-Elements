function generateOutfits() {
  const tops = document
    .getElementById("tops")
    .value.split(",")
    .map((item) => item.trim().toLowerCase());  
  const bottoms = document
    .getElementById("bottoms")
    .value.split(",")
    .map((item) => item.trim().toLowerCase());  
  const shoes = document
    .getElementById("shoes")
    .value.split(",")
    .map((item) => item.trim().toLowerCase());  
  const accessories = document
    .getElementById("accessories")
    .value.split(",")
    .map((item) => item.trim().toLowerCase());  
  const filter = document.getElementById("filter").value;

  let outfitList = document.getElementById("outfitList");
  outfitList.innerHTML = "";

  const casualItems = {
    tops: [
      "black t-shirt", "t-shirt", "blue sweater", "graphic t-shirt", "hoodie", 
      "casual button-up shirt", "tank top", "flannel shirt", "short-sleeve button-up", 
      "long-sleeve t-shirt", "crewneck sweatshirt", "belted shirt dress", "polo shirt", 
      "denim jacket", "sweater", "sando", "white t-shirt", "henley shirt", "v-neck t-shirt", 
      "baseball tee", "bomber jacket", "varsity jacket", "denim vest", "chambray shirt", 
      "raglan shirt", "oversized hoodie", "graphic sweatshirt", "windbreaker", "crop top", 
      "striped t-shirt", "corduroy jacket", "knit cardigan"
    ],
    bottoms: [
      "jeans", "shorts", "chinos", "joggers", "cargo pants", "sweatpants", "skorts", 
      "leggings", "trousers", "culottes", "capri pants", "distressed jeans", "cargo shorts", 
      "sweat shorts", "track pants", "overalls", "denim shorts", "bermuda shorts", 
      "corduroy pants", "ripped skinny jeans", "loose-fit jeans", "athletic pants"
    ],
    shoes: [
      "sneakers", "flip flops", "loafers", "canvas shoes", "ankle boots", "slides", 
      "chelsea boots", "high-top sneakers", "moccasins", "platform shoes", "crocs", 
      "nikes", "pandas", "samba", "skate shoes", "slip-on sneakers", "running shoes", 
      "hiking boots", "desert boots", "low-top sneakers", "espadrilles", "boat shoes", 
      "clogs", "leather sandals", "tennis shoes", "sliders"
    ]
  };

  const formalItems = {
    tops: [
      "white shirt", "light blue dress shirt", "black dress shirt", "polo shirt", 
      "dress blazer", "pinstriped shirt", "silk blouse", "turtleneck sweater", 
      "crisp white turtleneck", "sleeveless blouse", "silk camisole", "velvet blazer", 
      "lace blouse", "sequin top", "sheer blouse", "peplum top", "ruffle shirt", 
      "satin wrap top", "embellished blazer", "cropped blazer", "fitted cardigan", 
      "chiffon blouse", "embroidered dress shirt", "velvet dress shirt", "lace turtleneck"
    ],
    bottoms: [
      "black trousers", "navy trousers", "gray slacks", "khaki dress pants", 
      "formal shorts", "pleated skirt", "a-line skirt", "pencil skirt", 
      "tailored trousers", "dressy culottes", "pinstripe trousers", "cropped dress pants", 
      "wide-leg trousers", "tapered dress pants", "high-waist dress pants", 
      "palazzo pants", "satin skirt", "tiered skirt", "maxi skirt", "velvet pencil skirt", 
      "wrap skirt"
    ],
    shoes: [
      "formal shoes", "oxfords", "brogues", "dress boots", "loafers", "derby shoes", 
      "pointed-toe heels", "wedge heels", "dress sandals", "cap-toe shoes", "black shoes", 
      "flat shoes", "slingback heels", "peep-toe heels", "court shoes", "kitten heels", 
      "platform heels", "ankle strap heels", "patent leather shoes", "stilettos", 
      "satin pumps", "embellished sandals", "ballet flats", "metallic loafers", 
      "chunky heels"
    ]
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
