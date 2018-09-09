import React from 'react';

class Welcome extends React.Component {
    render() {
        const todoList = ['Learn React', 'Learn Redux'];
        const isLogin = true;
        const test = <h1> Hello React </h1>;
        console.log(test);
        return (
            <div className="" htmlFor="">
                <h1> Hello React </h1>
                {'becky'}
                {12 + 34}
                {[1, 2, 3]}
                {<p>this is new.</p>}
                {/*ng-repeat | v-for*/}
                <ul>
                    {
                        todoList.map(item=>
                            <li>{item}</li>
                        )
                    }
                </ul>
                {/*ng-if | v-if*/}
                { isLogin? <p> 您已登录</p>: <p>请登录</p> }
            </div>
        );
    }
}

export default Welcome;