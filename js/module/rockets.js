export const getNameRocket = async(page) => {
    console.log(page);
    let options = {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            options : {
                page,
                limit : 1
            }     
        })
    };
    console.log(options);
    return fetch("https://api.spacexdata.com/v4/rockets/query", options)
    .then(data => {
        if (!data.ok) {
            throw new Error("Network response was not ok");
        }
        return data.json();
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        throw error;
    });
}