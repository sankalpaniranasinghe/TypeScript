//Function for creating random names using random date of birth between 1970 and 2002
function generateRandomName() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var min = 1970;
    var max = 2002;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    var randomDate = new Date(random, mm, dd);
    var dd = randomDate.getDate();
    var mm = randomDate.getMonth() + 1; //January is 0!
    var yyyy = randomDate.getFullYear();
    if (dd < 10) {
        this.dd = '0' + dd;
    }
    if (mm < 10) {
        this.mm = '0' + mm;
    }
    this.today = dd + '-' + mm + '-' + yyyy;
    return today;
}
