({
	// The campingListFormController JavaScript controller calls the helper's createItem method if the form is valid.
    submitForm: function(component, event, helper){
        var vValidItemName = helper.validate(component.find("itemname"), "Name");
        var vValidItemQuantity = helper.validate(component.find("quantity"), "Quantity");
        var vValidItemPrice = helper.validate(component.find("price"), "Price");

        if(vValidItemName && vValidItemQuantity && vValidItemPrice){
            var newItem = component.get("v.newItem");
            console.log("Create camping item: " + JSON.stringify(newItem));
            helper.createItem(component, newItem);
        }
    }
})