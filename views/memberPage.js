const render = function(data){
    console.log(data);
    return `
        <h4>Welcome ${data.firstName} ${data.lastName}!</h4>
        
        <button type='button' id='clockIn'>Clock In</button>
    <button type='button' id='clockOut'>Clock Out</button>
    `
}

exports.render = render;