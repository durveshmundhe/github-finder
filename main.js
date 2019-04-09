$(document).ready(function() {
    var userName, data;
    var auth = 'f592cd037eb40ec31d94ef614ee368a477fc4e5f';

    $('.input-search').on('keyup', function(e) {
            // if(e.which == 13) {
                userName = $(this).val();
                console.log(userName);
                searchProfile(userName);
            // }
            
        
    });

    function searchProfile(user) {
        $.ajax({
            method: 'GET',
            url: 'https://api.github.com/users/'+userName,
            headers: {
                Autherization: auth,
            },
            success: function(data) {
                console.log(data);
            },
            error: function(data) {
                console.log(data.responseJSON.message);
            }
        });
    }


    // function subscribersList(data) {
	// 	$('.subscribe-tbody').empty();
    //     var source = $("#subscribe-list-script").html();
    //     var template = Handlebars.compile(source);
    //     $('.subscribe-tbody').append(template(data));
	// }
    
})