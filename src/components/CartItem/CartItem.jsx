import { Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function CartItem({item}) {
    return (
        <tr>
            <td><Image src={item.image}/></td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>
                <Button>
                    <FontAwesomeIcon icon={faCircleXmark} size="1x"/>
                </Button>
            </td>
        </tr>
    )
}