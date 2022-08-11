var i = 0;

function loadItems(){
    items.sort(function (a, b) {
        return Math.random() - 0.5;
    });
    showItems()
}

function showItems(){
    document.getElementById('item').src = items[i] 
    i++
}