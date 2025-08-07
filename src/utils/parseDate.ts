const parseDate = (unknownDate:Date) => {
    const date = new Date(unknownDate)
    const day = date.getDate();
    const month = date.toLocaleString('default', {month:'long'});
    const year = date.getFullYear();
    // const suffix = getOrdinalSuffix(day)
    // const formattedDate = `${day}${suffix} ${month} ${year}`
    const formattedDate = `${day} ${month} ${year}`
    
    // console.log(formattedDate)
    return (formattedDate)
}

function getOrdinalSuffix(day:number){
    if (day>=11 && day<=13 ){
        return 'th'
    } switch (day % 10) {
        case 1:
            return 'st'
            break;
        case 2:
            return 'nd'
            break;
        case 3:
            return 'rd'
            break;
        default:
            return 'th'
            break;
    }
}

export default parseDate;