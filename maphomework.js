const outfits = [
    {
      id: 1,
      bottoms: "slacks",
      top: "orange",
      shoes: "leather",
      type: "formal",
      own: false
    },
    {
      id: 3,
      bottoms: "jeans",
      top: "t-shirt",
      shoes: "flip flops",
      type: "casual",
      own: true
    },
    {
      id: 2,
      bottoms: "yoga",
      top: "tank top",
      shoes: "flip flops",
      type: "casual",
      own: false
    },
    {
      id: 9,
      bottoms: "skirt",
      top: "blouse",
      shoes: "heals",
      type: "formal",
      own: true
    },
    {
      id: 6,
      bottoms: "shorts",
      top: "tank top",
      shoes: "none",
      type: "casual",
      own: true
    },
    {
      id: 7,
      bottoms: "jeans",
      top: "sweater",
      shoes: "boots",
      type: "casual",
      own: true
    },
    {
      id: 8,
      bottoms: "slacks",
      top: "button down",
      shoes: "dress",
      type: "formal",
      own: false
    },
  ]
  
  /* considering the array outfits, use map, filter and find to do the following */
  
  //Make a copy of outfits called outfitsCopy that can be modified without changing outfits directly.  
  const outfitsCopy = outfits.map(outfit => (
      { id: outfit.id,
        bottoms: outfit.bottoms,
        top: outfit.top,
        shoes: outfit.shoes,
        type: outfit.type,
        own: outfit.own,}
    ))
    console.log(outfitsCopy)
  //Change a value on outfitsCopy and use console logs to show you did not change outfits
  outfitsCopy[0].shoes = "Hemp";
  console.log(outfitsCopy)
  outfitsCopy[2].bottoms = "Pajamas"
  console.log(outfitsCopy)
  outfitsCopy[3].own = false
  console.log(outfitsCopy)

  //Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.
outfitsCopy.forEach((add) => {
    add.accesories = false;
})
console.log(outfitsCopy)

  //Make a copy (map) of outfits that contains on the properties of id, bottoms, tops and shoes
  
  //filter outfits to give only outfits that are casual
  
  // filter outfits to give only outfits that are owned
  
  // use find to return an outfit that has no shoes
  
  // use find to return an outfit that has boots
  
  
  //Bonus:
  // use find to return an outfit that has jeans and a t-shirt
  