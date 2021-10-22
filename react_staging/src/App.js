// 创建外壳组件App
import React,{Component} from "react";
import Hello from './components/hello/hello.jsx';

export default class App extends Component{
    render(){
        return (
            <div>
                <Hello/>
            </div>
        )
    }
}
