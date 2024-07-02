let section__main_left = document.querySelector(".section__main_left");
let pages = document.querySelectorAll(".page");

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

export const getAllRockets = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/rockets");
    let data = res.json();
    return data;
};

export const getCapsule = async(page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", options)
    let data = res.json();
    return data;
};

export const getAllCapsules = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/capsules");
    let data = res.json();
    return data;
};


export const getCrew = async(page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/crew/query", options)
    let data = res.json();
    return data;
};

export const getAllCrew = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/crew");
    let data = res.json();
    return data;
};

export const getLaunch = async(page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/launches/query", options)
    let data = res.json();
    return data;
};

export const getAllLaunch = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/launches");
    let data = res.json();
    return data;
};


export const getCores = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", options)
    let data = res.json();
    return data;
};

export const getAllCores = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/cores");
    let data = res.json();
    return data;
};

export const getLandpads = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", options)
    let data = res.json();
    return data;
};

export const getAllLandpads = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/landpads");
    let data = res.json();
    return data;
};

export const getShip = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/ships/query", options)
    let data = res.json();
    return data;
};

export const getAllShips = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/ships");
    let data = res.json();
    return data;
};

// export const getCompany = async (page) => {
//     let options = {
//         method : "POST",
//         headers : {
//             "content-type" : "application/json"
//         },
//         body : JSON.stringify({
//             options : {
//                 page,
//                 limit : 1
//             }
//         })
//     };
//     let res = await fetch("https://api.spacexdata.com/v4/company/query", options)
//     let data = res.json();
//     return data;
// };

export const getAllCompany = async() => {
    let res = await fetch("https://api.spacexdata.com/v4/company");
    let data = res.json();
    return data;
};


export const getDregons = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/dregons/query", options)
    let data = res.json();
    return data;
};




export const getHistory = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/history/query", options)
    let data = res.json();
    return data;
};




export const getLaunchPads = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/launchPads/query", options)
    let data = res.json();
    return data;
};





export const getPayLoads = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/payLoads/query", options)
    let data = res.json();
    return data;
};




export const getRoadster = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", options)
    let data = res.json();
    return data;
};





export const getStarlink = async (page) => {
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
    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", options)
    let data = res.json();
    return data;
};