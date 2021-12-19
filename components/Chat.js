import styled from 'styled-components';
import {Avatar, Button, IconButton} from "@material-ui/core";
import getRecipientEmail from "../utils/getRecipientEmail";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth , db} from "../firebase";
import {useCollection} from "react-firebase-hooks/firestore";
import {useRouter} from "next/router";

function Chat({id, users}) {

    const router = useRouter();
    const [user] = useAuthState(auth);
    const [recipientSnapshot] = useCollection(db.collection('users').where('email','==',getRecipientEmail(users,user)));

    const enterChat =() =>{
        router.push(`/chat/${id}`)
    }

    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getRecipientEmail(users, user);

    return (
    <Container onClick={enterChat}>
        {recipient ?(
            <UserAvatar src={recipient?.photoURL} />
        ):(
        <UserAvatar>{recipientEmail[0]}</UserAvatar> // first letter of the email
        )}
        <p>{recipientEmail}</p>
    </Container>
    );
}
  
  export default Chat;

  const Container = styled.div`
  display: flex;align-items: center;
  word-break: break-word;padding: 15px;
  cursor: pointer;
  
  :hover{
      background-color: #e9eaeb;
  }
  `;

  const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
  `;