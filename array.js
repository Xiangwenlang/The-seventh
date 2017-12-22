//实现map,reduce,forEach,some,filter
//创建两个数组
var foods = new Array()
var numbers = [2,3,7,9,"x"]
console.log(foods[0])  // undefined

//增加的几种方法

//添加到数组尾部
foods.push("鸡排")    // ["鸡排"]

//添加道数组头部
foods.unshift("鸭脖")  //["鸭脖", "鸡排"]

//新增第6项
numbers[5] = 23      // [2, 3, 7, 9, "x", 23]

//利用map
function OverTwo() {
    return(Element>2)
}
numbers.map(OverTwo)// [false, false, false, false, false, false] 
//用forEach

function OverTwo() {
    return(Element>2)
}
numbers.forEach(OverTwo)//undefined

//利用filter返回所有值都大于3的数组
function gg(Element){
    return(Element>3)
}
var ab=[23,4,5,6,1,0,1,1]
ab.filter(gg)//[23, 4, 5, 6]

//用reduce做加法
var plus=function(a,b){
   return a+b
}
ab.reduce(plus)















