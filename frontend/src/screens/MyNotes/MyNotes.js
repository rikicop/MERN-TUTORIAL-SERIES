import { Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";

const MyNotes = () => {
  return (
    <MainScreen title="Bienvenido Ricardo..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          My Notes
        </Button>
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              title
            </span>
            <div>
              <Button>Edit</Button>
              <Button variant="danger" className="mx-2">
                Delete
              </Button>
            </div>
          </Card.Header>
        </Card>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
