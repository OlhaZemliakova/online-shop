import { HiUser, HiShoppingCart } from "react-icons/hi";
import Container from 'react-bootstrap/Container';

export function Header() {

    return (
        <header>
            <Container className="container">
                <nav>
                    <p>About shop</p>
                    <p>Products</p>
                </nav>
                <div className="header-action">
                    <HiUser className="icon icon--user" />
                    <HiShoppingCart className="icon icon--basket" />
                </div>
            </Container>
        </header>
    )
}