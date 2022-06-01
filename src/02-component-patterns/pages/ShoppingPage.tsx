import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import coffe from '../../coffee-mug.png';


const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: coffe
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shooping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={ product }>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Café'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={ product }>
                    <ProductImage />
                    {/* <ProductTitle title={''} /> */}
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
