// checker function
function formChecker(destCity, destDate) {
    if (destCity == "" || destDate == "") {
        return false;
    } else {
        return true;
    }
};

export {formChecker};
