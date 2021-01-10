//console.log("hii");
function getMovie(){
    console.log("bye");
    fetch("  http://localhost:3333/movies").then(response=>{
        if(response.status===200)
        {
            return response.json()
        }
    }).then(movie=>{
        console.log("hello");
        let tbody=document.getElementById('movies').getElementsByTagName('tbody')[0]
        let tbodyHtml='';
        movie.forEach(movies => {
            console.log("bagh");
                tbodyHtml+=`<tr><td>${movies.id}</td>
                <td>${movies.name}</td>`
                
            })
        
        tbody.innerHTML=tbodyHtml;
       // console.log(movie);
    }).catch((error)=>{
        console.log(error)
    })
}
getMovie()
