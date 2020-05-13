// 一
// 1.state数据
// 2.JSX模板
// 3.数据+模板 结合，生成真实的DOM, 来显示
// 4.state 发生变化
// 5.数据+模板 结合，生成真实的DOM,替换原始的DOM

// 缺陷：
// 第一次生成了一个完整的DOM片段
// 第二次生成了一个完整的DOM片段
// 第二次的DOM替换第一次的DOM,非常耗性能


// 二
// 1.state数据
// 2.JSX模板
// 3.数据+模板 结合，生成真实的DOM, 来显示
// 4.state 发生变化
// 5.数据 + 模板 结合，生成真实的DOM,并不直接替换原始的DOM
// 6.新的DOM(DocumentFragment) 和原始的DOM 做对比，找差异
// 7.找出input框发生了变化
// 8.只用新的DOM中的input元素，替换掉老的DOM中的input元素

// 缺陷：
// 性能提升不明显


// 三
// 1.state数据
// 2.JSX模板
// 3.数据+模板 结合，生成真实的DOM, 来显示
//<div id='abc'><span>hello world</span></div>
//4.生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM)（损耗了性能）
//['div', {id: 'abc'}, ['span', {}, 'hello world']]
//5.state发生变化
//6.数据 + 模板 生成新的虚拟DOM（极大的提升了性能）
//['div', {id: 'abc'}, ['span', {}, 'bye bye']]
//7.比较原生虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容（极大的提升性能）
// 8.直接操作DOM,改变span中内容

// 真实情况
// 1.state数据
// 2.JSX模板
//4.数据+模板 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM)（损耗了性能）
//['div', {id: 'abc'}, ['span', {}, 'hello world']]
// 3.用虚拟DOM的结构，生成真实的DOM, 来显示
//<div id='abc'><span>hello world</span></div>
//5.state发生变化
//6.数据 + 模板 生成新的虚拟DOM（极大的提升了性能）
//['div', {id: 'abc'}, ['span', {}, 'bye bye']]
//7.比较原生虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容（极大的提升性能）
// Diff , different
// 8.直接操作DOM,改变span中内容

// 优点：
// 性能提升了
// 它使得跨端应用得以实现 React Native


// JSX -> React.createElement -> 虚拟DOM(JS对象) -> 真实的DOM
//React.createElement('div', {}, 'item')
