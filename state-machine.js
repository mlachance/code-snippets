var states={"STATE1":0, "STATE2":1, "STATE3":3};
var myDB = openDatabase("Web DB", "1.0", "My Test DB", 1024*1024);
function getSomething() {
    myDB.transaction(function(tx) {
        tx.executeSql("SELECT * FROM mytable", [] , function(tx, result) {
            var obj={"idx":result.rows.item(0)["mycolumnname"],
                "name":result.rows.item(0)["column2"]};
            StateMachine("STATE1", obj);

        });
    });
}
function doSomething() {
    getSomething();
}
function StateMachine(st ,arg) {
    switch(states[st]) {
        case states["STATE1"]:
            alert(arg.idx+", "+arg.name);
            break;
        case states["STATE2"]:
            break;
        case states["STATE3"]:
            break;
        default:
    }
}
