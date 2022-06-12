import { Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {CartContext} from '../../context/CartContext';
import {useContext} from 'react';

export default function CartItem({item}) {
    const {removeFromCart} = useContext(CartContext);
    return (
        <tr>
            <td><Image className="cartImg" src={item.image}/></td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>
                <Button onClick={() => removeFromCart(item.id)}>
                    <FontAwesomeIcon icon={faCircleXmark} size="1x"/>
                </Button>
            </td>
        </tr>
    )
}