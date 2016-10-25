({
    clickCreateExpense: function(component, event, helper){
        if(helper.validateExpenseForm(component)){
            var newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }
    }

})