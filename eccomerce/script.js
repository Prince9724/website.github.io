const container = document.getElementById("container");
// const cartlist = localStorage.setItem("cart")
const displayProduct=(products)=>{
    products.forEach((product)=>{
        const div = document.createElement("div");
        div.innerHTML=` <div class="card" style="width: 18rem;">
                <img src=${product.images[0]} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">price - ${product.price}-/</li>
                    <li class="list-group-item"> -${product.discountPercentage}%</li>
                    <li class="list-group-item">${product.brand}</li>
                </ul>
                <div class="card-body ms-3">
                    <button class="btn btn-secondary">view</button>
                    <button onclick= "addToCart('${product}')" class="btn btn-success ms-3"> Add to cart</button>
                </div>
            </div>`;
            container.appendChild(div);
    });
}

// const cartDisplay= ()=>{
    
// }
const addToCart = (product)=>{
    console.log(product);
    console.log("true");
}
const   fetchProduct =()=> {
        fetch("https://dummyjson.com/products")
        .then(res=>res.json())
        .then(data => {
            displayProduct(data.products)
        })
}
fetchProduct();
//2500