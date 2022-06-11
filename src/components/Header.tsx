import React from 'react'
interface Props {
    text: string
}

class Header extends React.Component<Props, {}> {
    render() {
        return (
            <div className="ui fixed menu">
                <div className="ui container center">
                    <h2>{this.props.text}</h2>
                </div>
            </div>
        );
    }
}

export default Header;