import {ADD_PERSON} from '../constant'

// 创建增加一个人的action操作对象
export const createPersonAction = personObj => ({type:ADD_PERSON,data:personObj})