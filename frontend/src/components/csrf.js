let csrfToken = null;

async function getCsrfToken(){
    if(csrfToken==null){
        const res = await fetch('/api/csrf_token/');
    }
    const data = await response.json();
    csrfToken = data.csrfToken;
    return csrfToken;
}

async function testRequest(method){
    const response = await fetch('/api/test/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': await getCsrfToken()
        },
    });
    const data = await response.json();
    return data.result;
}