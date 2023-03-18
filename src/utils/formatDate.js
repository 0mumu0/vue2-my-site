export default function(timestamp){
    const date = new Date (+timestamp);
    const month = (date.getMonth()+1).toString().padStart(2,'0')//确保长度为二，不足的在前面加0
    const day = date.getDate().toString().padStart(2,'0')//确保长度为二，不足的在前面加0

    return `${date.getFullYear()}-${month}-${day}`
}