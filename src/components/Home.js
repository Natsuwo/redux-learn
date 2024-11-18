import Container from "react-bootstrap/esm/Container";
import Header from "./Header";
import TableUser from "./TableUser";
import FormAddNew from "./FormAddNew";

const Home = (props) => {
  return (
    <Container>
      <Header></Header>
      <FormAddNew></FormAddNew>
      <hr />
      <TableUser></TableUser>
    </Container>
  );
};

export default Home;
