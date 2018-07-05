var Customer = {
    customerId: 2378,
    contactName: "Pravinkumar R. D.",
    city: "Pune",
    getCustomerProfile: function () {
        var _self = this;
        // setTimeout(function () {
        //     console.log("Customer Id is " + _self.customerId + " contact name is " + _self.contactName + " lives in city " + _self.city);
        // }, 2000);
        setTimeout(function () {
            console.log("Customer Id is " + this.customerId + " contact name is " + this.contactName + " lives in city " + this.city);
        }.bind(this), 2000);
    }
}

Customer.getCustomerProfile();

function TrainingInformation(trainingName) {
    var trainerName = "Manish Sharma";
    function getTrainingInformation() {
        return "Synechron has scheduled a training on " + trainingName + " and trainer is " + trainerName;
    }
    return getTrainingInformation;
}

var trainingInfo = TrainingInformation("Angular 5");
var output = trainingInfo();
console.log(output);
