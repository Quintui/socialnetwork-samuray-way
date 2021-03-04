export const mappingObjectToArray = (items,itemId,newObjName, newObjProps) => {
   return  items.map(u => {
        if (u[newObjName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u
    })
}


