const render = function(data){
    return `
        <h4>Welcome ${data.firstName} ${data.lastName}!</h4>
        
    `
}

exports.render = render;