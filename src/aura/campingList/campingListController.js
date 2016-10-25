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

    createItem : function(component, event, helper){
        var validItem = true;


        // TODO need to be moved in campingListHelper.js as a utility method.
        var vComponentItemname = component.find("itemname");
        if($A.util.isEmpty(vComponentItemname.get("v.value"))){
            validItem = false;
            vComponentItemname.set("v.errors", [{
                message: "Camping Item Name can't be blank."
            }]);
        }else{
            vComponentItemname.set("v.errors", null);
        }

        var vComponentQuantity = component.find("quantity");
        if($A.util.isEmpty(vComponentQuantity.get("v.value"))){
            validItem = false;
            vComponentQuantity.set("v.errors", [{
                message: "Camping Item Quantity can't be blank."
            }]);
        }else{
            vComponentQuantity.set("v.errors", null);
        }

        var vComponentPrice = component.find("price");
        if($A.util.isEmpty(vComponentPrice.get("v.value"))){
            validItem = false;
            vComponentPrice.set("v.errors", [{
                message: "Camping Item Price can't be blank."
            }]);
        }else{
            vComponentPrice.set("v.errors", null);
        }


        if(validItem){
            var newItem = component.get("v.newItem");
            console.log("Create camping item: " + JSON.stringify(newItem));
            helper.createNewItem(component, newItem);

//            // TODO need to be moved in campingListHelper.js as createNewItem method.
//            var theItems = component.get("v.items");
//            var newItem = JSON.parse(JSON.stringify(newItem));
//            console.log("Items before 'create': " + JSON.stringify(theItems));
//            theItems.push(newItem);
//            component.set("v.items", theItems);
//            console.log("Items after 'create': " + JSON.stringify(theItems));
//
//            component.set("v.newItem", {
//                'sobjectType': 'Camping_Item__c',
//                'Name': 'default',
//                'Quantity__c': 0,
//                'Price__c': 0,
//                'Packed__c': false
//            });
//
        }
    }
})