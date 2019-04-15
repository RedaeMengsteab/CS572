var University = /** @class */ (function () {
    function University(name, depatment) {
        this.name = name;
        this.depatment = depatment;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.depatment + " " + year + " students");
    };
    return University;
}());
var mum = new University("MUM", "Masters of Computer Science");
mum.graduation(2019);
