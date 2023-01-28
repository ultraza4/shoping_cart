import { Button, Card, CardImg } from "react-bootstrap";
import { useShopingCartContext } from "../context/ShopingCartContext";
import { formatCurrency } from "./../utilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getitemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShopingCartContext();
  return (
    <>
      <Card className="h-100">
        <CardImg
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-center">
            <span>{name}</span>
            <span>{formatCurrency(price)}</span>
          </Card.Title>
          {getitemQuantity(id) === 0 ? (
            <Button style={{ width: "100%" }} onClick={() => increaseCartQuantity(id)}>Add to cart</Button>
          ) : (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{getitemQuantity(id)}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
                Delete Item
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
