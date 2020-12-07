import React, {Component} from 'react';

class Posts extends Component {
    render() {
        let{item, onSelectPost} = this.props;
        return (
            <div>
                {item.id} - {item.title} - {item.body}
                <button onClick={() => onSelectPost(item.id)}>Chose_me</button>
            </div>
        );
    }
}

export default Posts;    