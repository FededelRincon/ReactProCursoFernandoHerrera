import coffe from '../../coffee-mug.png';
import coffe2 from '../../coffee-mug2.png';
import { Product } from '../interfaces/Product.interfaces';

const product1 = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: coffe
}

const product2 = {
    id: '2',
    title: 'Coffe Mug - Meme',
    img: coffe2
}

export const products: Product[] = [ product1, product2 ];