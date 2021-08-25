import {useLocation} from 'react-router-dom';
import DressProduct from '../../ProductCards/DressProduct/DressProduct';

const PDP = () => {

    const location = useLocation();

    const {key} = location.state
    
    return (
        <div>
            <DressProduct />
        </div>
    );
};
    
export default PDP;