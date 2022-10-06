import React from "react";
import { Component } from "react";
import Arr from './Mock.js'
import './index.css'


class Tables extends Component {
    state = {
        list: Arr,
        name: '',
        Searching: '',
        addingtxt: '',
        img: ''
    }
    render() {

        const onDelete = (id) => {
            console.log(id);
            let res = this.state.list.filter((value) => value.id !== id)
            this.setState({ list: res })
        }

        // let Add = () => {
        //     let AddText = {
        //         id: this.state.list.length + 1,
        //         name: this.state.addingtxt
        //     }
        //     this.setState({ list: [...this.state.list,AddText] })
        // }


        return (
            <div className="container">
                <table border='1'>
                    <tr className="fixedd">
                        <th className="id">ID</th>
                        <th>NAME</th>
                        <th colSpan='2'>Controls</th>
                    </tr>
                    {/* <tr>
                        <td onChange={(e) => this.setState({ addingtxt: e.target.value })}><input type="text" /></td>
                        <td><button onClick={Add}>add</button></td>
                    </tr> */}

                    {/* <tr>

                        <td><input onChange={(e) => this.setState({ Searching: e.target.value })} type="text" /></td>
                    </tr> */}
                    {this.state.list.map((value) => value.name.toLocaleLowerCase().includes(this.state.Searching.toLocaleLowerCase()) && (
                        <tr>
                            <td className="id">{value.id}</td>
                            <td>{value.name}
                            </td>
                            <td><button onClick={() => onDelete(value.id)}>Delete</button></td>
                            {/* <td><button>Edit</button></td> */}
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default Tables;