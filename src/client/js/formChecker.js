// checker function
function formChecker(userCity, date) {
    if (userCity == "" || date == "") {
        return false;
    } else {
        return true;
    }
};

export {formChecker};
