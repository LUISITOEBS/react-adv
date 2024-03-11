import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
            <h1>
                Shopping Store
            </h1>
            <hr />

            <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <div className='shoping-cart'>
                    {
                        Object.entries(shoppingCart).map( ( [key, product] ) => (
                            <ProductCard
                                key={ key }
                                product={ product }
                                className="bg-dark text-white"
                                style={{ width: '100px' }}
                                value={ product.count }
                                onChange={ ( event ) => onProductCountChange( event ) }
                            >
                                <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.4)' }}/>
                                <ProductCard.Buttons 
                                    className="custom-bottoms"
                                    style={{ 
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                />
                            </ProductCard>
                        ))
                    }
                </div>



                {
                    products.map(product => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            className="bg-dark text-white"
                            onChange={ ( event ) => onProductCountChange( event ) }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.4)' }}/>
                            <ProductCard.Title className="text-bold"/>
                            <ProductCard.Buttons className="custom-bottoms"/>
                        </ProductCard>
                    ))
                }
            </div>
            <div>
                <code>
                    { JSON.stringify( shoppingCart, null, 5 ) }
                </code>
            </div>
            
        </div>
    )
}
