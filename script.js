document.querySelector("button").addEventListener("click", function (){
    const jsfasi = parseFloat(document.getElementById("fasi").value.trim());
    const sakomisio = 22.25
    const gakofa = 100
    const fasi = jsfasi+(jsfasi*sakomisio/gakofa)
    const damrgvalebuliFasi = Math.ceil(fasi / 5) * 5
    if(isNaN(jsfasi)){
        alert("რიცხვები ჩაწერე.");
        return;
    }
    alert("შენ მოსა დაგიჯდება "+damrgvalebuliFasi+" ლარი")
})
