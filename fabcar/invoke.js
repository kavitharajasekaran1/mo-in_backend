let multichain = require("multichain-node")({
    port:  9722,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "FSZrpvaEqsohBN7hpERNr6armn4q4YTgsuJyevDwbBsC"        
});


function savetransaction(params) {
   
    return new Promise((resolve) => {
        var response;

      var TransactionDetails = params.Transactiondetails.data;
      var policyNumber= params.Transactiondetails.key;
    console.log("TransactionDetails",params.Transactiondetails.data)
    console.log("TransactionDetailsssss",params.Transactiondetails.key)

    var hex = '';
    for(var i=0;i<TransactionDetails.length;i++) {
        hex += ''+TransactionDetails.charCodeAt(i).toString(16);
    }
    console.log("hex",hex);
    
    multichain.publish({stream: "policyInfo",key: policyNumber,data: hex }, (err, res) => {
        console.log(res)
        if(err == null){
         return resolve({response:res});
        }else{
            console.log(err)
        }
    })

})
   
}
module.exports = {
    savetransaction: savetransaction
    

};
