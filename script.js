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
    outfitList.innerHTML = ""; // Clear the current list
  
    // Define casual and formal items (this can be extended)
    const casualItems = {
      tops: [
        "Black t-shirt",
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
      ],
    };
  
    // Generate all combinations
    for (let top of tops) {
      for (let bottom of bottoms) {
        for (let shoe of shoes) {
          for (let accessory of accessories) {
            // Filter logic
            if (filter === "casual") {
              if (
                !casualItems.tops.includes(top) ||
                !casualItems.bottoms.includes(bottom) ||
                !casualItems.shoes.includes(shoe)
              ) {
                continue; // Skip if not casual
              }
            } else if (filter === "formal") {
              if (
                !formalItems.tops.includes(top) ||
                !formalItems.bottoms.includes(bottom) ||
                !formalItems.shoes.includes(shoe)
              ) {
                continue; // Skip if not formal
              }
            }
  
            // Create and display the outfit combination
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
  