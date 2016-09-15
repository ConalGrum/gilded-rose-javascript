function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  items.forEach(function(item){
    if (item.name === 'Aged Brie') {
      update_AgedBrie(item);
    }else if (item.name === 'Sulfuras, Hand of Ragnaros') {
      update_Sulfuras(item);
    }else if (item.name.includes('Backstage passes')){
      update_BackstagePasses(item)
    }else if (item.name === 'Conjured') {
        update_Conjured(item);
    }else
    {
    update_Normalbehaviour(item)
    }
  });
}

function update_Sulfuras(item) {
  item = item;
}

function update_AgedBrie(item) {
  item.sell_in = item.sell_in-1;
  item.quality < 50 ? item.quality = item.quality + 1 : item;
}

function update_BackstagePasses(item){
  if (item.sell_in <=10 && item.sell_in >=6) {
    item.quality < 49 ? item.quality = item.quality + 2 : item.quality = 50;
  }else if(item.sell_in <=5 && item.sell_in >=1){
    item.quality < 49 ? item.quality = item.quality + 3 : item.quality = 50
  }else if (item.sell_in <=0){
    item.quality=0;
  }else{
    item.quality < 50 ? item.quality = item.quality + 1 : item.quality = 50
  }

  item.sell_in = item.sell_in-1;
}

function update_Conjured(item) {
  item.sell_in = item.sell_in-1;
  if (item.quality >= 2){
  item.quality = item.quality -2
}else if (item.quality=1){
  item.quality=0
}
}

function update_Normalbehaviour(item){
  if (item.quality==0){
    item.sell_in = item.sell_in-1

  }else if (item.sell_in <=0){
    item.sell_in = item.sell_in-1
    item.quality=item.quality-2

  }else{
    item.quality=item.quality-1
    item.sell_in = item.sell_in-1
  }

}
