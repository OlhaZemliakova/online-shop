import { useState } from "react"
import { IProduct } from "../modeles"
import { HiShoppingCart } from "react-icons/hi";

interface ProductProps {
    product: IProduct
}

export function Product(props: ProductProps) {
    const [details, setDetails] = useState(false)
    const buttonBgClassName = details ? 'button button--yellow' : 'button button--blue'
    const buttonClasses = ['button', buttonBgClassName]

    return (
        <div className="product-item"
        >
            <img src={props.product.image} className="product-image" alt="props.product.title" />
            <p>{props.product.title}</p>
            <div className="product-price">
            <span className="font-bold">{props.product.price} CAD</span>
            <HiShoppingCart className="icon" />
            </div>
            <button className={buttonClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? "Hide details" : "Show details"}
            </button>
            {details &&
                <div>
                    <p className="product-description">{props.product.description}</p>
                    <p>Rate: <span style={{ fontWeight: 'bold' }}>{props.product.rating.rate}</span></p>
                </div>}
        </div>
    )
}