const data = [
    {
        id: 0,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 1,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 2,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 3,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 4,
        img: 'images/msi.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 5,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 6,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 7,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 8,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 9,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 10,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 11,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 12,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 13,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 14,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 15,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 16,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 17,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 18,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id: 19,
        img: 'images/Cover2.jpg',
        name: 'Redmi k20',
        price: 2000,
        save: 50,
        delivery: 'In 3 - 4 days',
        itemInCart: false
    },
];

let cartList = []; // array to store cart lists

var i;
var details = document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img');
var detailsTitle = document.getElementById('details-title');
var detailsPrice = document.getElementById('details-price');
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('back')

back.addEventListener('click', refreshPage); // click events to go home page
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// clisk event to display cart 
cart.addEventListener('click', displayCart); 

var carts = document.getElementById('carts');

// clisk events to add item to cart from details page
carts.addEventListener('click',()=>addToCart(getId));
var getId;
var home = document.getElementById('logo');
// click event to hide cart page and return to home page
home.addEventListener('click',hideCart); 

// click events on dynamically created elements to remove items from list
document.addEventListener('click', function (e) {
    if (e.target.id == 'remove') {
        var itemId = e.target.parentNode.id;
        removeFromCart(itemId);
    }
})

// click event to display details page
for (i = 0; i < data.length; i++) {
    details[i].addEventListener('click', handleDetails)  
}


// click events to add items to cart from home page cart icon
addToCarts.forEach(val => val.addEventListener('click',() => addToCart(val.parentNode.id)));

// details function
function handleDetails() {
    detailsPage.style.display = 'block';
    getId = this.parentNode.id;
    detailsImg.src = data[getId].img;
    detailsTitle.innerHTML = data[getId].name;
    detailsPrice.innerHTML = 'Price : ฿ ' + data[getId].price;
    youSave.innerHTML = 'You save : (฿ ' + data[getId].save + ')';
}

// function to display cart page
// function displayCart() {
//     document.getElementById('main').style.display = 'none';
//     document.getElementById('details-page').style.display = 'none';
//     document.getElementById('cart-container').style.display = 'block';
//     if (cartList.length == 0) {
//         document.getElementById('cart-with-items').style.display = 'none';
//         document.getElementById('empty-cart').style.display = 'block';
//     } else {
//         document.getElementById('cart-with-items').style.display = 'block';
//         document.getElementById('empty-cart').style.display = 'none';
//     }
// }

// add item to the cart
function addToCart(id) {
    if (!data[id].itemInCart) {
        cartList = [...cartList, data[id]];
        addItem();

        alert('Item added to your cart');
    } else {
        alert('Your item is already there');
    }
    data[id].itemInCart = true;
}

var totalAmount;
var totalItems;
var totalSaving;

// add item to the cart
function addItem() {
    totalAmount = 0;
    totalItems = 0;
    totalSaving = 0;
    var clrNode = document.getElementById('item-body');
    clrNode.innerHTML = '';
    cartList.map((cart) => {
        var cartCont = document.getElementById('item-body');
        totalAmount = totalAmount + cart.price;
        totalSaving = totalSaving + cart.save;
        totalItems = totalItems + 1;

        var tempCart = document.createElement('div');
        tempCart.setAttribute('class', 'cart-list');
        tempCart.setAttribute('id', cart.id);

        var listImg = document.createElement('img');
        listImg.setAttribute('id', 'list-img');
        listImg.src = cart.img;
        tempCart.appendChild(listImg);

        var listName = document.createElement('h3');
        listName.setAttribute('class', 'list-name');
        listName.innerHTML = cart.name;
        tempCart.appendChild(listName);

        var listPay = document.createElement('h3');
        listPay.setAttribute('class', 'pay');
        listPay.innerHTML = cart.price;
        tempCart.appendChild(listPay);

        var listQuantity = document.createElement('h3');
        listQuantity.setAttribute('class', 'quantity');
        listQuantity.innerHTML = '1';
        tempCart.appendChild(listQuantity);

        var listTrash = document.createElement('i');
        listTrash.setAttribute('class', 'fa fa-trash');
        listTrash.setAttribute('id', 'remove');
        tempCart.appendChild(listTrash);

        cartCont.appendChild(tempCart);
    })
    document.getElementById('total-amount').innerHTML = 'Total Amount : ฿ ' + totalAmount;
    document.getElementById('total-items').innerHTML = 'Total Items : ฿ ' + totalItems;
    document.getElementById('you-saved').innerHTML = 'You Saved : ฿ ' + totalSaving;
    document.getElementById('total').style.display = 'block';
}

// hide your cart page
function hideCart() {
    document.getElementById('main').style.display = 'block';  //////////
    document.getElementById('cart-container').style.display = 'none';
}


// back to home page from details page
function refreshPage() {
    detailsPage.style.display = 'none'
}

//display your cart page
function displayCart(){
    //document.getElementById('main').style.display = 'none';
    var divsToHide = document.getElementsByClassName('categories');
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    document.getElementById('details-page').style.display= 'none';
    document.getElementById('cart-container').style.display= 'block';
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= 'none';
        document.getElementById('empty-cart').style.display= 'block';
    }
    else{
        document.getElementById('empty-cart').style.display= 'none';
        document.getElementById('cart-with-items').style.display= 'block';
    }
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false;
    cartList = cartList.filter((list) => list.id!=itemId);
    addItem()
    if (cartList.length == 0) {
        document.getElementById('cart-with-items').style.display= 'none';
        document.getElementById('empty-cart').style.display= 'block';
    }
}