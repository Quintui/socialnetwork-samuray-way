import React from 'react'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    DialogList,
    DialogsWrapper,
    DialogWrap,
    InputButtonWrap,
    MessageButton,
    MessageForm,
    MessageItems
} from "./DialogsComponent";
import {Form} from 'react-final-form'
import {composeValidators, maxLength, required} from "../Common/RequiresDirectory/Requires";
import {fieldCreator} from "../Common/FieldCreator/fieldCreator";

const Dialogs = ({addNewMessage, dialogPage,}) => {

    const mapedDialog = dialogPage.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id}
                                                                 img={dialog.img}/>)
    const mapedMessages = dialogPage.messages.map((message) => <Message key={message.id} message={message.message}
                                                                        img={message.img}/>)

    const addMessage = (messageData) => {
        addNewMessage(messageData.message);

    }

    return (
        <DialogsWrapper>
            <DialogWrap>
                <DialogList>
                    {mapedDialog}
                </DialogList>
                <MessageItems>
                    {mapedMessages}
                </MessageItems>
            </DialogWrap>
            <InputButtonWrap>
                <Form onSubmit={addMessage}
                      render={({handleSubmit}) => (
                          <MessageForm onSubmit={handleSubmit}>
                              {fieldCreator(
                                  'text',
                                  composeValidators(required, maxLength(50)),
                                  'message',
                                  'text',
                                  'Add Message'
                              )
                              }
                              <MessageButton>Add Message</MessageButton>
                          </MessageForm>
                      )}
                />


            </InputButtonWrap>
        </DialogsWrapper>
    )
}

export default Dialogs
