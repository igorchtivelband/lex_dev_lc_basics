({
    // The campingListFormHelper JavaScript helper creates an addItem event with the item to be added and then fires the event.
    createItem: function(component, item){
        var createEvent = component.getEvent("addItem");
        createEvent.setParams({
            "item": item
        });
        createEvent.fire();

        // It then resets the newItem value provider with a blank sObjectType of type Camping_Item__c.
        component.set("v.newItem", {
            'sobjectType': 'Camping_Item__c',
            'Name': '',
            'Quantity__c': 0,
            'Price__c': 0,
            'Packed__c': false
        });
    },

    validate: function(pComponent, pName){
        if($A.util.isEmpty(pComponent.get("v.value"))){
            pComponent.set("v.errors", [{
                message: "Camping Item " + pName + " can't be blank."
            }]);
            return false;
        }else{
            pComponent.set("v.errors", null);
            return true;
        }
    }
    
})