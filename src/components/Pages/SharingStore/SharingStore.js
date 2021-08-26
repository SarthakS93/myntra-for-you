import Products from '../../ProductCards/Products/Products';
import { products } from '../../../data/products';

const SharingStore = () => {
    return (
        <div>
            <Products productList={products} title={"Clothes available for sharing"} />
        </div>
    );
};
    
export default SharingStore;