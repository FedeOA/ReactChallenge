import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Commentt from "../Commentt";

function List() {
  let token = localStorage.getItem("token");

  const [newList, setNewList] = useState([]);

  const[comment,setComment]=useState(false);

  const handleComment = ()=>{

    setComment(!comment);

  }


  const instance = axios.create({
    baseURL: "http://localhost:8080/v1",
    timeout: 1000,
    headers: { Authorization: "Bearer " + token },
  });

  useEffect(() => {
    instance.get("/news").then((response) => {
      const apiData = response.data.content;
      setNewList(apiData);
      console.log(apiData);
      setComment(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setNewList]);

  return (
    <>
      <Container className="m-box child h300 col-sm-8 col-xs-12 pl-pr">
        <br></br>
        <br></br>
        <Row xs={1} md={2} className="g-4" style={{ marginLeft:"150px"}}>
          {newList.map((oneNew, idx) => {
            return (
              <Col key={idx} style={{ width: "700px" }}>
                <Card style={{ columnCount: "2" }}>
                  <Card.Title>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "30px",
                        fontWeight: "600",
                        fontFamily: "Serif",
                      }}
                    >
                      {oneNew.name}
                    </p>
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://cohorte-agosto-38d749a7.s3.amazonaws.com/1661519321851-LOGO-SOMOS_MAS.png"
                  />
                  <p style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "30px",
                        fontWeight: "600",
                        fontFamily: "Serif",
                      }}>{oneNew.content}</p>
                  <Card.Body>
                    <button className="_abl-" type="button" onClick={handleComment}>
                      <div className="_abm0 _abm1">
                        <svg
                          aria-label="Comentar"
                          className="_ab6-"
                          color="#8e8e8e"
                          fill="#8e8e8e"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div className="_abm0 _abl_">
                        <svg
                          aria-label="Comentar"
                          class="_ab6-"
                          color="#262626"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    {comment?<Commentt/>:undefined}
                </Card.Body>
                </Card>
              </Col>
            );
            
          })}
        </Row>
      </Container>
      <br></br>
    </>
  );
}
export default List;
