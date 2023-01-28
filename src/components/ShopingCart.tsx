import { Offcanvas } from "react-bootstrap";
import { useShopingCartContext } from "../context/ShopingCartContext";

export function ShopingCart() {
    const {
        closeCart,
        cartQuantity,
        isOpen
    } = useShopingCartContext()
    
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
}