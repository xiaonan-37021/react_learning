import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createPersonAction as addPerson} from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const person = { id: nanoid(), name, age }
        this.props.addPerson(person)

        this.nameNode.value = ''
        this.ageNode.value = ''
    }


    render() {
        return (
            <div>
                <h2>我是Person组件, 上方数值为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>提交</button>

                <ul>
                    {
                        this.props.allPerson.map((person, index)=>{
                            return <li key={index}>{person.name} - {person.age}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        allPerson: state.allPerson,
        count: state.andCount
    }),
    // 简写版省略重名的
    {addPerson}
)(Person)
