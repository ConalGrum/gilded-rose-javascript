describe("Gilded Rose", function() {

  it("should do something", function() {
    update_quality();
    expect(items.length).toEqual(6)
  });

  it("should increase quality of brie as sell in value decreases", function() {
    const initial=new Item('Aged Brie', 2, 0);
    const expected=new Item('Aged Brie', 1, 1);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("test quality never goes above 50 for Brie", function() {
    const initial=new Item('Aged Brie', 2, 50);
    const expected=new Item('Aged Brie', 1, 50);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("Both sell in and quality lowered EOD", function() {
    const initial=new Item('Milkshake', 5, 10);
    const expected=new Item('Milkshake', 4, 9);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("Once the sell_in days is less then zero, quality degrades twice as fast", function() {
    const initial=new Item('Crumbed ham', 0, 10);
    const expected=new Item('Crumbed ham', -1, 8);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("Quality doesn't go below zero", function() {
    const initial=new Item('Crumbed ham', 3, 0);
    const expected=new Item('Crumbed ham', 2, 0);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("if item is Sulfuras, Hand of Ragnaros, values stay the same", function() {
    const initial=new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    update_quality();
    console.log(items);
    expect(items[3]).toEqual(initial);
  });

  it("if item is Backstage passes, and sell_in value greater than 11, quality increases by 1", function() {
    const initial=new Item('Backstage passes to a TAFKAL80ETC concert', 15, 6);
    const expected=new Item('Backstage passes to a TAFKAL80ETC concert', 14, 7);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("if item is Backstage passes, and sell_in value equals 10, quality increases by 2", function() {
    const initial=new Item('Backstage passes to a TAFKAL80ETC concert', 10, 6);
    const expected=new Item('Backstage passes to a TAFKAL80ETC concert', 09, 8);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("if item is Backstage passes, and sell_in value equals 5, quality increases by 3", function() {
    const initial=new Item('Backstage passes to a TAFKAL80ETC concert', 5, 6);
    const expected=new Item('Backstage passes to a TAFKAL80ETC concert', 4, 9);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("if item is Backstage passes, and sell_in value equals 0, quality is set to 0", function() {
    const initial=new Item('Backstage passes to a TAFKAL80ETC concert', 0, 25);
    const expected=new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
  });

  it("New item conjured degrades in quality twice as fast (x2)", function() {
    const initial=new Item('Conjured', 5, 3);
    const expected=new Item('Conjured', 4, 1);

    items.push(initial);
    update_quality();
    const index = items.indexOf(initial);
    expect(items[index]).toEqual(expected);
});
  //Conjured" items degrade in quality twice as fast as normal items
});
