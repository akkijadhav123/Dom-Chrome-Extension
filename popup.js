function injectTheScript() {

    chrome.tabs.executeScript( null, { file: "content_tawk.js" }, function( resp ){
  
        var respVisitor = resp[0];

        var u_name = respVisitor[0]; var u_email = respVisitor[1];
        
        var responseElement = document.getElementById("response");

        responseElement.innerHTML = " Username - <b>" + u_name + "</b> , Email - <b>" + u_email+"</b>";

        let serverUrl = 'http://localhost/crons/test.php';  // local
        let API_KEY = 'Z1f08GAV3tkzoZDA759d4H8o9RQ4iMb5';   // common for all
        $.ajax( {
                url : serverUrl,
                data : { 'username' : u_name, 'useremail' : u_email },
                headers : {
                            'X-API-KEY' : API_KEY
                }, 
                dataType : "json",
                success : function( resp ){
                    console.log( resp.data )
                    if( resp && resp.status == 'success' ){
                        //console.log( )
                        if ( ! $.isEmptyObject( resp.data ) ){
                            console.log (' data present ')
                            let responseText = resp.data;

                            let newHtml = "<table border = 1> <tr> <td> Username </td> <td> <b>" + responseText.username + "</b> </td> </tr> <tr> <td> Contact Email </td> <td> <b>"+ responseText.contact_email +"</b> </td> </tr> <tr> <td> Client Id </td> <td> <b>" + responseText.clientid + "</b> </td> </tr> <tr> <td> Client Name </td> <td> <b>" +responseText.client_name+ "</b>  </td> </tr> <tr> <td> Current Billing Start Date </td> <td> <b>" + responseText.current_billing_start_date + "</b> </td> </tr> <tr> <td> Current Billing End Date </td> <td> <b>" + responseText.current_billing_end_date + "</b> </td> </tr> <tr> <td> Plan Name </td> <td> <b> " + responseText.coupon_code + " </b> </td> </tr> <tr> <td> Plan Price </td> <td> <b> " + responseText.current_plan_price + " </b> </td>  </tr> <tr> <td> Plan renew Date</td> <td> <b> " + responseText.plan_renews_date + " </b> </td> </tr> </table> ";

                            responseElement.innerHTML = newHtml;
                        }
                         
                    }
                }
 
         })

    });
}

injectTheScript( );

//document.getElementById('clickactivity').addEventListener('click', injectTheScript);