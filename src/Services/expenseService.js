const baseUrl = 'https://lvaw1qhhfi.execute-api.us-east-1.amazonaws.com/Prod/api/';

let expenseService = {
    getAllExpense: ()=> fetch(baseUrl + "Expense"),

    getCategories: ()=> fetch(baseUrl + "Expense/Categories"),

    filterExpense: (filterObj)=> fetch(baseUrl + "Expense/filter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filterObj)
      }),

    deleteExpense: (idList)=> fetch(baseUrl + "Expense/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idList)
      }),

    addNew: (newRecord) => fetch(baseUrl + "Expense", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecord)
      })
}
 
export default expenseService;
