export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    let cartItem = this.cartItems.find(item => item.product.id == product.id)
    if(cartItem) {
      cartItem.count++;
    } else {
      cartItem = {product:product,count:1};
      this.cartItems.push(cartItem);
    }

    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(item => item.product.id == productId)

    cartItem.count+= amount;
    cartItem.count ==0 ? this.cartItems.splice(this.cartItems.indexOf(cartItem),1) : '';

    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((count,item)=>count + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum,item)=>sum + item.product.price * item.count, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
