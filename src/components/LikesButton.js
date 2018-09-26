import React from 'react';

class LikesButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }
    increaseLike() {
        this.setState({
            likes: this.state.likes+1
        });
    }
    render() {
        return (
            <div className="likes-button">
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => {this.increaseLike()}}>
                    <span role="img" aria-label="likes">👍</span>{this.state.likes}
                </button>
            </div>
        );
    }
}

export default LikesButton;

// comments:
// 1.state更新才会重新渲染界面
// 如果constructor有给this定义其他属性，这些属性更新并不会触发重新渲染
// 2.事件的回调里（如onClick）直接写this.increaseLike，在increaseLike拿不到this的指向
// 3.不能this.state.likes++，state的修改需要通过this.setState