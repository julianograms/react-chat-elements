import React, { Component } from "react";
import MessageListElements from "../../MessageList/MessageList";

class MessageList extends Component {
    componentDidUpdate(_prevProps, _prevState) {
        this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }

    render() {
        return (
            <div
                className="sc-message-list"
                ref={(el) => {
                    this.scrollList = el;
                }}
            >
                <MessageListElements
                    lang={this.props.lang}
                    className="message-list"
                    lockable={true}
                    markdown={this.props.markdown}
                    toBottomHeight={"100%"}
                    onDeleteClick={this.props.onDeleteClick}
                    dataSource={this.props.messages.map((message) => {
                        return {
                            ...message,
                            position:
                                message.author === "me" ? "right" : "left",
                            type: "text",
                            text: message.data.text,
                            deletable: message.deletable,
                            date: message.time,
                        };
                    })}
                />
            </div>
        );
    }
}

MessageList.defaultProps = {
    markdown: false,
    lang: "pt_BR",
};

export default MessageList;
