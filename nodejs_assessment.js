const data = [{
    key: 'eligibility',
    value: '{{data.adult}} > 20'
},
{
    key: "adult",
    value: '{{data.age}} + 10'
},
{
    key: "age",
    value: 17
}]

const recursion =(data)=>{
    let result =[]

         for(let i =0;i<data.length;i++){

             if(typeof data[i].value=='string'){
                 const val = recursion(data.slice(i+1))
                 const keyValue = val[0].key
              const newStr = data[i].value.replace(`{{data.${keyValue}}}`,val[0].value)
              data[i].value = eval(newStr)
                 result = [data[i],...val]
                 break
                }else {
                    result.push(data[i])
                }
            }
    
    return result
}

console.log(recursion(data))
