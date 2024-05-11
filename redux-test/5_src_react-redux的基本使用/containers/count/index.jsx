// 引入Count的UI组件
import CountUI from '../../components/Count';
// 引入connect用于连接UI自建与Redux
import { connect } from 'react-redux';
//引入action
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
        state指redux中保存的状态
*/ 
const mapStateToProps = (state) => {
    return {count: state};
};

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch){
    // 通知redux执行加法
    return {
        increment: number=>dispatch(createIncrementAction(number)),
        decrement: number=>dispatch(createDecrementAction(number)),
        incrementAsync: (number, time)=>dispatch(createIncrementAsyncAction(number, time))
    
    };
};


// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);