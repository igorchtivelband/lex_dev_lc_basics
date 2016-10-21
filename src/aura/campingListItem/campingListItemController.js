({
    packItem: function(component, event, helper){
        var vItem = component.get("v.item", true);
        vItem.Packed__c = true;
        component.set("v.item", vItem);
        event.getSource().set("v.disabled", true);
    }
})