({
    validateExpenseForm: function(component){
        // Simplistic error checking
        var validExpense = true;
        // Name must not be blank
        var nameField = component.find("expname");
        var expname = nameField.get("v.value");
        if($A.util.isEmpty(expname)){
            validExpense = false;
            nameField.set("v.errors", [{message:"Expense name can't be blank."}]);
        }else{
            nameField.set("v.errors", null);
        }
        // Amount must be set, must be a positive number
        var amtField = component.find("amount");
        var amt = amtField.get("v.value");
        if($A.util.isEmpty(amt) || isNaN(amt) || (amt <= 0.0)){
            validExpense = false;
            amtField.set("v.errors", [{message:"Enter an expense amount."}]);
        }else{
            // If the amount looks good, unset any errors...
            amtField.set("v.errors", null);
        }
        return(validExpense);
    },

    createExpense: function(component, expense){
//        var theExpenses = component.get("v.expenses");
//
//        // Copy the expense to a new object
//        // THIS IS A DISGUSTING, TEMPORARY HACK
//        var newExpense = JSON.parse(JSON.stringify(expense));
//        console.log("Expenses before 'create': " + JSON.stringify(theExpenses));
//        theExpenses.push(newExpense);
//        component.set("v.expenses", theExpenses);
//        console.log("Expenses after 'create': " + JSON.stringify(theExpenses));
//    }
//        var action = component.get("c.saveExpense");
//        action.setParams({
//            "expense": expense
//        });
//        action.setCallback(this, function(response){
//            var state = response.getState();
//            if(component.isValid() && state === "SUCCESS"){
//                var expenses = component.get("v.expenses");
//                expenses.push(response.getReturnValue());
//                component.set("v.expenses", expenses);
//            }
//        });
//        $A.enqueueAction(action);

        this.saveExpense(component, expense, function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
    },

    updateExpense: function(component, expense){
//        var action = component.get("c.saveExpense");
//        action.setParams({
//            "expense": expense
//        });
//        action.setCallback(this, function(response){
//            var state = response.getState();
//            if(component.isValid() && state === "SUCCESS"){
//                // do nothing!
//            }
//        });
//        $A.enqueueAction(action);

        this.saveExpense(component, expense);
    },

    saveExpense: function(component, expense, callback){
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        if(callback){
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    }
})