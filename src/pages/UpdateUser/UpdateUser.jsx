import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import './UpdateUser.css';
import { getProfile } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
// import { InputText } from "../../common/InputText/InputText";


export const UpdateProfile = () => {
    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});
    const datos = useSelector(userData);
    const token = datos?.credentials?.token;

    // const editHandler = (body, token) => {
    //     UpdateProfile(body, token)
    //     .then(setEditing(false));
    // }

    useEffect(() => {
        if (!editing) {
            getProfile(token)
            .then((res) => {
                console.log(res.data)
                if (res.data && res.data.user) {
                setUser(res.data.user);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [editing]);
    console.log("Token:", token);

    return (
        <Container>
            <Row className="userBody">
            <div className="userTittle">{user.name}</div>
                <Col>

                <div style= {{width:"24em"}}className="userLines">Nombre y apellido</div>
                <div style= {{width:"24em"}}className="userApi">{user.name}</div>

                <div style= {{width:"24em"}}className="userLines">Email</div> 
                <div style= {{width:"24em"}}className="userApi">{user.email}</div> 


                <div style= {{width:"24em"}}className="userLines">Password</div>
                <div style= {{width:"24em"}}className="userApi">***********</div>

                </Col>
                <div style= {{width:"15em"}}className="modificarDatos">Modificar datos</div>
            </Row>
        </Container>
    );
};