import {Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer () {
  return (
    <footer>
      <Card className="text-center">

  <Card.Body>
    <Card.Title> 2022 Fennex ©. All Rights Reserved </Card.Title>
    <Card.Text>
      Fennex Argentina S.R.L - 20-21321123-1
    </Card.Text>
    <Link to="/home"><Button variant="primary">Back to Home</Button></Link>
  </Card.Body>
  <Card.Footer className="text-muted">Luciano Cerullo - Front-End Developer</Card.Footer>
</Card>
    </footer>
  )
}