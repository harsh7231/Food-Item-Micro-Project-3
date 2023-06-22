const data=require('./food.json');
    // `data` variable contains the parsed JSON data
    const foodArray = data.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `foodArray` now contains all the items from the JSON file
    console.log('All food Items:');
    console.log(foodArray);

    const vegetableItems = data.filter(item => item.category === 'Vegetable');
    const vegetableItemData = vegetableItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `vegetableItemData` now contains the item data where category is "vegetable"
    console.log('All food Items with Category Vegetable:');
    console.log(vegetableItemData);

    const fruitItems = data.filter(item => item.category === 'Fruit');
    const fruitItemData = fruitItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `fruitItemData` now contains the item data where category is "fruit"
    console.log('All food Items with Category Fruit:');
    console.log(fruitItemData);

    const proteinItems = data.filter(item => item.category === 'Protein');
    const proteinItemData = proteinItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `proteinItemData` now contains the item data where category is "protein"
    console.log('All food Items with Category Protein:');
    console.log(proteinItemData);

    const nutsItems = data.filter(item => item.category === 'Nuts');
    const nutsItemData = nutsItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `nutsItemData` now contains the item data where category is "nuts"
    console.log('All food Items with Category Nuts:');
    console.log(nutsItemData);

    const GrainItems = data.filter(item => item.category === 'Grain');
    const GrainItemData = GrainItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `GrainItemData` now contains the item data where category is "grain"
    console.log('All food Items with Category Grain:');
    console.log(GrainItemData);

    const dairyItems = data.filter(item => item.category === 'Dairy');
    const dairyItemData = dairyItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `dairyItemData` now contains the item data where category is "dairy"
    console.log('All food Items with Category Dairy:');
    console.log(dairyItemData);

    const calorieABItems = data.filter(item => item.calorie >100 );
    const calorieABItemData = calorieABItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `calorieABItemData` now contains the item data where calorie is above 100
    console.log('All food Items with Calorie above 100:');
    console.log(calorieABItemData);

    const calorieBEItems = data.filter(item => item.calorie <100 );
    const calorieBEItemData = calorieBEItems.map(item => {
      return {
        id: item.id,
        foodname: item.foodname,
        calorie: item.calorie,
        category: item.category,
        protiens: item.protiens,
        cab: item.cab
      };
    });
    // `calorieBEItemData` now contains the item data where calorie is below 100
    console.log('All food Items with Calorie below 100:');
    console.log(calorieBEItemData);

    const sortedItems = data.sort((a, b) => b.protiens - a.protiens);
    const sortedItemsData = sortedItems.map(item => {
        return {
            id: item.id,
            foodname: item.foodname,
            calorie: item.calorie,
            category: item.category,
            protiens:item.protiens,
            cab:item.cab
        };
    });
    //`sotedItemData` now contains the item data with highest protien content to lowest
    console.log('All food Items with highest protien content to lowest');
    console.log(sortedItemsData);

    const lowcabItems = data.sort((a, b) => a.cab - b.cab);
    const lowcabItemsData = lowcabItems.map(item => {
        return {
            id: item.id,
            foodname: item.foodname,
            calorie: item.calorie,
            category: item.category,
            protiens:item.protiens,
            cab:item.cab
        };
    });
    //`lowcabItemData` now contains the item data with lowest cab content to highest
    console.log('All food Items with lowest cab content to highest');
    console.log(lowcabItemsData);