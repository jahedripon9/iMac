function updatePrice(id){
    console.log(id);
    // Memory Price Update
    if(id === '8gb'){
        updateSpanText("memory-cost", 0);
    }else if(id === "16gb"){
        updateSpanText("memory-cost", 180);
    }else if(id === "256gb"){
        updateSpanText("storage-cost", 0);
    }else if(id === "512gb"){
        updateSpanText("storage-cost", 100);
    }else if(id === "1tb"){
        updateSpanText("storage-cost", 180);
    }else if(id === 'free-delivery'){
        updateSpanText("delivery-cost", 0);
    }else if(id === 'cost-delivery'){
        updateSpanText("delivery-cost", 20);
    }
    updateSubTotal()
}

// update / replace span text
function updateSpanText(id, price){
    document.getElementById(id).innerText = price;
}


function getSpanText(id){
const price = document.getElementById(id).innerText;
return parseInt(price);
}

function updateSubTotal(){
    const total = 1299 + getSpanText("memory-cost") +
    getSpanText("storage-cost") +
    getSpanText("delivery-cost") 
    updateSpanText("total-cost", total)
    updateSpanText("discount-total-price",total)
}

function couponCode(){
    const promoCode = document.getElementById("coupon-code").value;
    
    if(promoCode === 'stevekaku'){
        const total = getSpanText('total-cost');
        const discountTotal = total * .80;
        updateSpanText("discount-total-price",discountTotal)
    }
}