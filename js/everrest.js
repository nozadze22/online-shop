

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class EverrestService {
    constructor(baseUrl = "https://api.everrest.educata.dev") {
        this.baseUrl = baseUrl
    }

    request (METHOD, endpoint, body={}) {
        const xhr = new XMLHttpRequest();
        xhr.open(METHOD, `${this.baseUrl}/${endpoint}`);
        xhr.setRequestHeader("Content-type", "application/text")
        xhr.send(JSON.stringify(body));
        return new Promise((resolve, reject) => {
            xhr.onload =() => {
                if(xhr.status === 200 || xhr.status === 201) {
                    resolve(JSON.parse(xhr.responseText))

                }else {
                    reject(xhr)
                }
            }
        });
    }

    getAllProducts (query = "") {
        return this.request("Get", `shop/products/all/${query}`);
    }


    generateProductCards(product) {
        console.log(product)
        return `
         <div class="card" style="width: 18rem;">

     <div class="card-header">
    Featured
  </div>


  <img src="${product.thumbnail}" class="card-img-top" alt="product images">
  <div class="card-body">
    <p class="card-text">${product.description}</p>
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cuurent price: ${product.price.current} ${product.price.currency}</li>
    <li class="list-group-item">before Discount: ${product.price.beforeDiscount} ${product.price.currency}</li>
    <li class="list-group-item">Discount: ${product.price.discountPercentage} ${product.price.currency}</li>
        <li class="list-group-item">Stock: ${product.stock}</li>
        <li class="list-group-item">Rating: ${product.rating}  ${new Array(5).fill(0).map((element, index) => {
        let className = "fill"
        if(index === 4) {
           className =  product.rating >= 4.5? 'fill': "half";
        }
        return `<i class='bi bi-star-${(product.rating >= index) && (product.rating !== 0) ? className: ''}'></i>`
        }).join("")}</li>
        <li class="list-group-item">Brand: ${product.brand} </li>
        <li class="list-group-item">Warranty: ${product.warranty} </li>
        <li class="list-group-item">Category: ${product.category.name} </li>
  </ul>
 
  <div class"action">
  <a href="#"class="btn btn-primary">check product</a>
  
  <button class="btn btn-primary">Add to cart</button>

  </div>
  <div class="card-footer text-body-secondery">
  ${new Date(product.issueDate).toLocaleDateString()}
  </div>
</div> 
        `;
    }
}