console.log("------------------------FIRST TASK-------------------------");
{
    let num = 42
    console.log(`${typeof num}: ${num}`);
    let numtostr = String(num)
    console.log(`${typeof numtostr}: ${numtostr}`);
    let str = "25"
    console.log(`${typeof str}: ${str}`);
    let strtonum = Number(str)
    console.log(`${typeof strtonum}: ${strtonum}`);
}
console.log("-----------------------------------------------------------");
console.log("------------------------SECOND TASK------------------------");
{
    let str = "10"
    console.log(`${typeof str}: ${str}`);
    let add = 11
    console.log(`Add: ${add}`);
    let sub = 12
    console.log(`sub: ${sub}`);
    let added = str + add
    let subbed = str - sub
    console.log(`"10" + 11 = ${added}`);
    console.log(`"10" - 12 = ${subbed}`);
}
console.log("-----------------------------------------------------------");
console.log("------------------------THIRD TASK-------------------------");
{
    let str = "15.5"
    let strfloat = parseFloat(str)
    console.log(`${typeof strfloat}: ${strfloat}`);
    let multy = 2
    console.log(`Multiply: ${multy}`);
    let div = 3
    console.log(`Divide: ${div}`);
    let multied = multy * strfloat
    console.log(`"15.5" * 2 = ${multied}`);
    let divided = str/div
    console.log(`"15.5" ÷ 3 = ${divided}`);
}
console.log("-----------------------------------------------------------");
console.log("------------------------FOURTH TASK------------------------");
{
    let str = "5"
    console.log(`${typeof str}: ${str}`);
    let add = 3
    console.log(`Add: ${add}`);
    let sub = 3
    console.log(`sub: ${sub}`);
    let added = str + add   
    console.log(`"5" + 3 = ${added}`);
    let subbed = str - sub
    console.log(`"5" - 3 = ${subbed}`);
}
console.log("-----------------------------------------------------------");
console.log("------------------------FIFTH TASK-------------------------");
{
    let bol = true
    console.log(`${typeof bol}: ${bol}`);
    let num = 1
    console.log(`${typeof num}: ${num}`);
    let added = bol + num
    console.log(`true + 1 = ${added}`);
    let subbed = bol - num
    console.log(`true - 1 = ${subbed}`);
}
console.log("-----------------------------------------------------------");
console.log("-------------------------WE FINSHED------------------------");
