// Defining the CoffeeShop class
class CoffeeShop {
    constructor() {
      this.menu = []; // Menu Items, each item holds item name and price
      this.orders = []; // Customer Orders, each order holds data for the table, items ordered and status of the order
    }
  
    // Add item to menu
    addMenuItem(itemName, price) {
      this.menu.push({ itemName, price });
      console.log(`Menu item added: ${itemName} - $${price}`);
    }

    // Take order for a table
    takeOrder(tableNumber, items) {
      const order = {
        tableNumber,
        items,
        status: "Preparing" // Default status
      };
      this.orders.push(order);
      console.log(`Order taken for table ${tableNumber}: ${items.join(", ")}`);
    }
  
    // Update status of an order
    updateOrderStatus(tableNumber, status) {
      const order = this.orders.find(order => order.tableNumber === tableNumber);
      if (order) {
        order.status = status;
        console.log(`Order status updated for table ${tableNumber} to ${status}`);
      } else {
        console.log(`No order found for table ${tableNumber}`);
      }
    }
  
    // Calculate the total bill for a specific table
    calculateBill(tableNumber) {
      const order = this.orders.find(order => order.tableNumber === tableNumber);
      if (order) {
        const total = order.items.reduce((sum, itemName) => {
          const menuItem = this.menu.find(item => item.itemName === itemName);
          return sum + (menuItem ? menuItem.price : 0);
        }, 0);
        console.log(`Total bill for table ${tableNumber} is $${total.toFixed(2)}`);
        return total;
      } else {
        console.log(`No order found for table ${tableNumber}`);
        return 0;
      }
    }
  
    // Display all active orders (status: "Preparing" or "Served")
    displayActiveOrders() {
      const activeOrders = this.orders.filter(order => 
        order.status === "Preparing" || order.status === "Served"
      );
      console.log("Active orders:");
      activeOrders.forEach(order => {
        console.log(`Table ${order.tableNumber}: ${order.items.join(", ")} - Status: ${order.status}`);
      });
      return activeOrders;
    }
  }
  
export default CoffeeShop;
  