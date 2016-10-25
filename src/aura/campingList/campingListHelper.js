({
    createNewItem: function(component, item){
//        var theItems = component.get("v.items");
//        var newItem = JSON.parse(JSON.stringify(item));
//        console.log("Items before 'create': " + JSON.stringify(theItems));
//        theItems.push(item);
//        component.set("v.items", theItems);
//        console.log("Items after 'create': " + JSON.stringify(theItems));
//
//        component.set("v.newItem", {
//            'sobjectType': 'Camping_Item__c',
//            'Name': 'default',
//            'Quantity__c': 0,
//            'Price__c': 0,
//            'Packed__c': false
//        });

        var action = component.get("c.saveItem");
        action.setParams({
            "pCampingItem": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
        $A.enqueueAction(action);
    }
})