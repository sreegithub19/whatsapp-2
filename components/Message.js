import {Avatar, Button, IconButton} from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollection} from "react-firebase-hooks/firestore";
import { auth , db} from "../firebase";
import Chat from "./Chat";
import {useRouter} from "next/router";
import moment from "moment";



function Message({user,message}) {
    const [userLoggedIn] = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ? Sender: Receiver;

    return( 
        <Container>
            <TypeOfMessage>{message.message}
            <Timestamp>
            {message.timestamp ? moment(message.timestamp).format('LT'): "..."}
            </Timestamp>
            </TypeOfMessage>
        </Container>
    );
}

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
width: fit-content;
padding: 15px;
border-radius: 8px;
margin: 10px;
min-width: 60px;
padding-bottom: 26px;
position: relative;
text-align: right;
`;

const Sender = styled(MessageElement)`
margin-left: auto;
background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
text-align: left;
background-color: whitesmoke;
`;


const Timestamp = styled.span`
color: gray;
padding: 10px;
font-size: 9px;
position: absolute;
bottom: 0;
text-align: right;
right: 0;
`;