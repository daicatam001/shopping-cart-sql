import Product from './product';
import Cart from './cart';
import User from './user';


User.hasOne(Cart,{
    onDelete:'CASCADE'
})
Cart.belongsTo(User); 
