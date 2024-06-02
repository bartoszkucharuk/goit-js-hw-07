const categories = document.querySelector(`#categories`);
const categoriesItems = categories.children;
console.log(`Number of categories: ${categoriesItems.length}`);

 for (const listItems of categoriesItems) {
    console.log(`Category: ${listItems.querySelector('h2').textContent}`);
    console.log(`Elements: ${listItems.querySelectorAll('li').length}`)
}