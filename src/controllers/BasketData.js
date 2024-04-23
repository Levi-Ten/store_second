import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function BasketData() {
  const getProduct = localStorage.getItem("basketItem");
  const itemResult = JSON.parse(getProduct);

  const viewItem = itemResult?.map((product) => {
    let itemAmount = product.quantity + 1;
    let itemMinus = product.quantity - 1;
    let itemPrice = product.price;

    function addItem() {
      const newItemResult = itemResult.map((element) => {
        if (product.id === element.id) {
          const changedProduct = {
            ...element,
            quantity: itemAmount,
            commonPrice: itemPrice * itemAmount,
          };
          return changedProduct;
        } else {
          const changedProduct = { ...element };
          return changedProduct;
        }
      });
      localStorage.setItem("basketItem", JSON.stringify(newItemResult));
      window.location.reload(true);
    }

    function removeItem() {
      if (product.quantity > 1) {
        const newItemResult = itemResult.map((element) => {
          if (product.id === element.id) {
            const changedProduct = {
              ...element,
              quantity: itemMinus,
              commonPrice: itemPrice * itemMinus,
            };
            return changedProduct;
          } else {
            const changedProduct = { ...element };
            return changedProduct;
          }
        });
        localStorage.setItem("basketItem", JSON.stringify(newItemResult));
        window.location.reload(true);
      }
    }
    function deleteItem() {
      const deleteItemId = product.id;
      const removeElement = itemResult.filter((element, id) => {
        if (element.id !== deleteItemId) {
          return element;
        }
      });
      localStorage.setItem("basketItem", JSON.stringify(removeElement));
      window.location.reload(true);
    }
    return (
      <>
        <div className="cart__product">
          <div className="product__picture">
            <img
              className="product__picture-img"
              src={product.img}
              alt={product.title}
            ></img>
          </div>
          <div className="details">
            <h2>{product.title}</h2>
            <p className="price">{product.price}$</p>
            <p className="qty">{product.quantity}</p>
            <div>
              <button className="details__btn" onClick={addItem}>
                +
              </button>
              <button className="details__btn" onClick={removeItem}>
                -
              </button>
            </div>
            <div className="trash__basket">
              <FontAwesomeIcon icon={faTrashCan} onClick={deleteItem} />
            </div>
          </div>
        </div>
      </>
    );
  });
  return viewItem;
}
export default BasketData;
