var dom = document.getElementsByClassName('jarviswidget focus-chat');

if( dom[0] && dom[0] != 'null' ){

    var userNameInput = dom[0].querySelector(" div.section-content > div:nth-child(1) > form > section:nth-child(1) > label > input").value.trim();
    console.log( 'userNameInput', userNameInput )

    var userEmailInput = dom[0].querySelector(" div.section-content > div:nth-child(1) > form > section:nth-child(2) > label > input ").value.trim(); 
    console.log( 'userEmailInput', userEmailInput)

    var final = new Array( );
    final[0] = userNameInput;
    final[1] = userEmailInput;
    final;

}

