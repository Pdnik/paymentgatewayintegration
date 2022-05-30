
(function ($) {
    "use strict";
    var instance = new Razorpay({ key_id: 'rzp_test_AiMbeRtMukgX6K', key_secret: '8YvtsOHcAeWyPnjKGQ2ALBsJ' })

instance.orders.create({
  amount: 50000,
  currency: "INR",
  receipt: "receipt#1",
  notes: {
    key1: "",
    key2: ""
  }
})
    var instance = new Razorpay({  key_id: 'rzp_test_AiMbeRtMukgX6K',  key_secret: 'YOUR_KEY_SECRET',});
    
    <button id="rzp-button1">Pay</button><script src="https://checkout.razorpay.com/v1/checkout.js"></script><script>var options = {    "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise    "currency": "INR",    "name": "Acme Corp",    "description": "Test Transaction",    "image": "https://example.com/your_logo",    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1    "handler": function (response){        alert(response.razorpay_payment_id);        alert(response.razorpay_order_id);        alert(response.razorpay_signature)    },    "prefill": {        "name": "Gaurav Kumar",        "email": "gaurav.kumar@example.com",        "contact": "9999999999"    },    "notes": {        "address": "Razorpay Corporate Office"    },    "theme": {        "color": "#3399cc"    }};var rzp1 = new Razorpay(options);rzp1.on('payment.failed', function (response){        alert(response.error.code);        alert(response.error.description);        alert(response.error.source);        alert(response.error.step);        alert(response.error.reason);        alert(response.error.metadata.order_id);        alert(response.error.metadata.payment_id);});document.getElementById('rzp-button1').onclick = function(e){    rzp1.open();    e.preventDefault();}</script>

    "handler": function (response){    alert(response.razorpay_payment_id);    alert(response.razorpay_order_id);    alert(response.razorpay_signature)}
    rzp1.on('payment.failed', function (response){    alert(response.error.code);    alert(response.error.description);    alert(response.error.source);    alert(response.error.step);    alert(response.error.reason);    alert(response.error.metadata.order_id);    alert(response.error.metadata.payment_id);}
    generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

  if (generated_signature == razorpay_signature) {
    payment is successful
  }
     Dictionary<string, string> attributes = new Dictionary<string, string>();

            attributes.Add("razorpay_payment_id", paymentId);
            attributes.Add("razorpay_order_id", Request.Form["razorpay_order_id"]);
            attributes.Add("razorpay_signature", Request.Form["razorpay_signature"]);

            Utils.verifyPaymentSignature(attributes);
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);
