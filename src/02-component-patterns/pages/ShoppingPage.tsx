import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { initialValues } from '../interfaces/interfaces';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>
                Shopping Store
            </h1>
            <hr />

            <ProductCard
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ( { reset, count, increaseBy, isMaxCountReached } ) => (
                        <>
                            <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.4)' }}/>
                            <ProductCard.Title className="text-bold"/>
                            <ProductCard.Buttons className="custom-bottoms"/>
                            <button onClick={ reset }>Reset</button>
                            <button onClick={ () => increaseBy(-2) }>-2</button>
                            {/* Si no se llega al mayor mostrarlo */}
                            {
                                !isMaxCountReached && (<button onClick={ () =>  increaseBy(2) }>+2</button>)
                            }
                            
                            <span>count: { count }</span>
                        </>
                    )
                }
                
            </ProductCard>


        </div>
    )
}
