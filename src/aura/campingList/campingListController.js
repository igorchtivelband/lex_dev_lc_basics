({
    doInit: function(component, event, helper){
        var action = component.get("c.getItems");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                component.set("v.items", response.getReturnValue());
            }else{
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },

    // The handleAdditem method saves the record to the database and adds the record to the items value provider.
    handleAddItem: function(component, event, helper){
        var vNewItem = event.getParam("item");
//        helper.createNewItem(component, vNewItem);

        var action = component.get("c.saveItem");
        action.setParams({
            "pCampingItem": vNewItem
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