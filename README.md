# vite

#### vite依赖预构建

首先vite会找到对应的依赖，然后通过**esbuild**（对js语法进行处理的一个库）将其他规范的代码转换成ESM规范，然后放到当前目录下的node_model/.vite/deps

他解决了3个问题

1. 不同的第三方包含有不同的导出格式（vite没办法约束）
2. 对路径的处理上可以直接使用.vite/deps,方便路径重写
3. 网络多包传输的性能问题（也是原生ESM不敢支持node_model的原因）eg：**lodash-es**

#### vite环境变量

1. vite-config使用环境变量时，要使用loadEnv去赋值一下

{title:'标题',width:150,field:'title',visible:false,align:'left',params:{isMerge:true},},
