const mainData = [

    {
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
    }

]

const recursion = (data) => {
    let result = []

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i].value === 'string' && /{{data.[0-9a-z]+}}/gi.test(data[i].value)) {
            const a = data[i].value.split('}')[0].split('.')[1]
            const xyz = mainData.find((el) => el.key === a)
            const val = recursion([xyz])
            const keyValue = val[0].key
            const newStr = data[i].value.replace(`{{data.${keyValue}}}`, val[0].value)
            data[i].value = eval(newStr)
            result.push(data[i])
        }
        else result.push(data[i])

    }

    return result
}

console.log(recursion(mainData))
