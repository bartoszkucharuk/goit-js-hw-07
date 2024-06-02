const categories = document.querySelector(`#categories`);
const categoriesItems = categories.children;
console.log(`Number of categories: ${categoriesItems.length}`);

 for (const listItems of categoriesItems) {
    console.log(`Category name: ${listItems.querySelector('h2').textContent}`);
    console.log(`Numbers of elements: ${listItems.querySelectorAll('li').length}`)
}