
const paginationProducts= document.querySelector("#paginationPrducts");
const products = document.querySelector("#products");
// <li class="page-item disabled">
// <span class="page-link">Previous</span>
// </li>
// <li class="page-item"><a class="page-link" href="#">1</a></li>
// <li class="page-item active" aria-current="page">
// <span class="page-link">2</span>
// </li>
// <li class="page-item"><a class="page-link" href="#">3</a></li>
// <li class="page-item">
// <a class="page-link" href="#">Next</a>
// </li>


// eslint-disable-next-line no-undef
everrestService.getAllProducts().then(result => {
     
     console.log(result)
result.products.forEach(product => {
    // eslint-disable-next-line no-undef
    products.innerHTML += everrestService.generateProductCards(product)

})
    
    
}).catch( err => {
    console.log(err)
})



