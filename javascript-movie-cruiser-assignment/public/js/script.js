function getMovies() {
    console.log("ho")
    fetch('http://localhost:3000/movies').then((response)=>{
        if(response.status===200){
            return response.json()
        }

    
    }).then((movies)=>{
        let tbodyhtml=""
        let tbody = document.getElementById('moviesList')
        console.log(movies)
        movies.forEach(element => {
            tbodyhtml += `<li>${element.id}.${element.movieName}</li>
			<button id='addToFav' class='btn btn-primary button' onclick='addFavourite(${element.id})'>Add to Favs</button>`
        });
        
        tbody.innerHTML=`${tbodyhtml}`

        
    }).catch((error)=>{
        console.log(error)
    })
    
	
    let buttons=document.querySelector(".buttn")
    buttons.addEventListener("click", function(){
             console.log("in btn");
         });
}



function getFavourites() {
    console.log("Fetch all movies")
    //returns a pending promise
    fetch('http://localhost:3000/favourites').then((response)=>{
        if(response.status===200){
            return response.json()
        }
    }).then((favourites)=>{
       
        let ul2 = document.getElementById('favouritesList')
        let ulhtml2 =''
        console.log(favourites)
        favourites.forEach(element=>{
            ulhtml2+=`<li>${element.movieName} ${element.id}</li>`         
        })
        ul2.innerHTML=`${ulhtml2}`;
    }).catch((error)=>{
        console.log(error)
    })

 
}

function addFavourite(id) {
    console.log("i am in fav button")
    fetch(`http://localhost:3000/movies/${id}`).then((response)=>{
        if(response.status===200)
        {
           return response.json()
        }

    }).then((movies)=>{
        let name=movies.movieName;
        let id=movies.id;
        let fav = {
            'moviename':name,
            'id':id
        }
        console.log(fav)


    

    //post

    fetch('http://localhost:3000/favourites',{
        'method':'POST',
        'headers':{
            'Content-type':'application/json'
        },
        'body':JSON.stringify(fav)

    }).then((response)=>{
        if(response.status===201)
        {
            console.log('data added')
            getFavourites()
        }
    }).catch(error=>{console.log(error)})
}).catch(error=>{ console.log(error)})

   
}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};