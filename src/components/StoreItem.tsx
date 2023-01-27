import { Button, Card, CardImg } from "react-bootstrap";
import { formatCurrency } from "./../utilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
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
          {quantity === 0 ? (
            <Button style={{ width: "100%" }}>Add to cart</Button>
          ) : (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">
                Delete Item
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
