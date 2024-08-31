import CoffeeShop from "./coffeeShop.mjs";

const coffeeShop = new CoffeeShop();
  
  // Adding items to menu
  coffeeShop.addMenuItem("Espresso", 2.5);
  coffeeShop.addMenuItem("Latte", 3.5);
  coffeeShop.addMenuItem("Cappuccino", 4.0);
  coffeeShop.addMenuItem("Tea", 2.0);
  
  // Taking orders
  coffeeShop.takeOrder(1, ["Espresso", "Latte"]);
  coffeeShop.takeOrder(2, ["Cappuccino", "Tea"]);
  coffeeShop.takeOrder(3, ["Espresso", "Tea"]);
  
  // Updating order status
  coffeeShop.updateOrderStatus(1, "Served");
  coffeeShop.updateOrderStatus(2, "Preparing");
  
  // Calculating total bills
  coffeeShop.calculateBill(1);
  coffeeShop.calculateBill(2);
  
  // Displaying active orders
  coffeeShop.displayActiveOrders();