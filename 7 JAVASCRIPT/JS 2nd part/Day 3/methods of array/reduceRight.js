//reduceRight()---->function apply to all array elements and returns a single value(it will first value)
arr=[
    [1,'chinnu',100],
    [2,'minnu',200],
    [3,'ponnu',100],
    [4,'manu',100],
    [5,'anu',300]
]

//who got the minimum value
console.log(arr.reduceRight((n1,n2) =>n1[2]<n2[2]? n1:n2));//[ 1, 'chinnu', 100 ]
//vs reduce aanu use cheyyunne enkil last value varm
console.log(arr.reduce((n1,n2) =>n1[2]<n2[2]? n1:n2));//[ 4, 'manu', 100 ]