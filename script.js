class Product {
  constructor(id, name, price) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
}

const keybord=new Product(1,"keybord",100)//{}
const mouse=new Product(2,"mouse",50)//{}


class ShoppingCartItem {//{prod:{},quantity}
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  calculatePrice() {
    return this.product.price * this.quantity;
  }
}

const item=new ShoppingCartItem(keybord,5)
const item2=new ShoppingCartItem(mouse,2)
const item3=new ShoppingCartItem(mouse,10)



class ShoppingCart {//{cart:[{prod:{},quantity},{prod:{},quantity}]}
  constructor(...params) {
    this.cart = [...params];
  }
  getTotal() {
    return this.cart.reduce((a, element) => {
      return a + element.calculatePrice();
    }, 0);
  }

  addItem(newprod){
    this.cart.push(newprod)
  }
  removeItem(product){
    this.cart=this.cart.filter(ele=>ele.product.id!==product.id)
  }
}

const shopping=new ShoppingCart(item,item2)
shopping.addItem(item3)
shopping.removeItem(keybord)
console.log("🚀 ~ shopping:", shopping)
