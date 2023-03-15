import { HiUser, HiShoppingCart } from "react-icons/hi";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export function Header() {

    return (
        <header>
            <Container className="container">
                <nav>
                    <Link className="me-5" to="/">About shop</Link>
                    <Link to="/products">Products</Link>
                </nav>
                <div className="header-action">
                    <HiUser className="icon icon--user" />
                    <HiShoppingCart className="icon icon--basket" />
                </div>
            </Container>
        </header>
    )
}