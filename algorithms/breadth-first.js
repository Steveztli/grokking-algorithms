export const breadthFirst = (start, connexions) => {
  let checkList = [start.name];
  let checkedList = []
  
  for (let i = 0; i < checkList.length; i++) {
    let candidate = getElement(connexions, checkList[i]);
    
    if (candidate.selected) {
      return candidate.name;
    }
    
    checkList = checkList.concat(keepNewConnexions(checkList, checkedList, candidate.connexions));
    
    // Checkedlist is not mandatory
    // checkedList.push(checkList.shift());
    // --i;
  }

  return undefined;
};

const getElement = (connexions, name) => {
  return connexions.filter(val => val.name === name)[0];
};

const keepNewConnexions = (checkList, checkedList, connexions) => {
  return connexions.filter(con => !checkList.includes(con) && !checkedList.includes(con));
};
