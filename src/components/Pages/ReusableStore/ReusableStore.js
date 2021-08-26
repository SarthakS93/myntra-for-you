import Products from '../../ProductCards/Products/Products';
import { products } from '../../../data/products';

const ReusableStore = () => {
    return (
        <div>
            <Products productList={products} title={"Clothes made of recyclable material"} />
        </div>
    );
};
    
export default ReusableStore;