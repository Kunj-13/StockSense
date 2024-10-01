## Conceptual data model diagram

![image](https://github.com/user-attachments/assets/32c24499-253f-4d65-a1b6-52c57a4045e7)


## USER to ORDER relationship:

- Data flow: User → Order
- Description: When a user places an order, their user_id is associated with the new order record. This allows the system to track which user placed each order. The user's information (name, address, etc.) can be retrieved for order fulfillment and communication purposes.


## RESTAURANT to ORDER relationship:

- Data flow: Restaurant → Order
- Description: When an order is placed, it's associated with a specific restaurant using the restaurant_id. This allows the system to route orders to the correct restaurant for preparation. The restaurant's information (name, address, etc.) can be used for order preparation and delivery logistics.


## RESTAURANT to DISH relationship:

- Data flow: Restaurant → Dish
- Description: Each restaurant defines its menu by creating dish records associated with its restaurant_id. This allows the system to display the correct menu items for each restaurant. When users browse a restaurant's menu, they see the dishes associated with that specific restaurant.


## ORDER to ORDER_ITEM relationship:

- Data flow: Order ↔ Order Item
- Description: When a user adds items to their order, each item becomes an ORDER_ITEM record associated with the ORDER. The order_id links these items to the specific order. This allows the system to track what items are in each order, their quantities, and individual prices.


## DISH to ORDER_ITEM relationship:

- Data flow: Dish → Order Item
- Description: When a user selects a dish to add to their order, the dish_id is used to create an ORDER_ITEM record. This links the specific dish details (name, price, description) to the order item, ensuring accurate order composition and pricing.


ORDER to PAYMENT relationship:

- Data flow: Order → Payment
- Description: Once an order is finalized, a PAYMENT record is created and associated with the ORDER using the order_id. This allows the system to track payment status for each order. The order's total amount is used to set the payment amount, and the payment method chosen by the user is recorded.


USER to RESTAURANT:

- While there's no direct relationship in the diagram, users interact with restaurants by browsing their menus (dishes) and placing orders. The system uses the restaurant_id associated with dishes and orders to present relevant information to users.


DISH to ORDER:

- Dishes are connected to orders through the ORDER_ITEM entity. This allows the system to calculate order totals, track popular dishes, and provide detailed order information to both users and restaurants.
