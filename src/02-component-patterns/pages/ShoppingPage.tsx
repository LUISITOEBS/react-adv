import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    image: './coffee-mug.png'
}

export const ShoppingPage = () => {
    
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
                <ProductCard 
                    product={ product }
                    style={{ backgroundColor: 'red' }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.4)' }}/>
                    <ProductTitle style={{ color: 'white' }}/>
                    <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
                </ProductCard>

                 <ProductCard 
                    product={ product }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-bottoms" />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className="bg-dark text-white"
                >
                    <ProductCard.Image className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.4)' }}/>
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-bottoms"/>
                </ProductCard>
            </div>
            
        </div>
    )
}
