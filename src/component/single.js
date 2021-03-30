import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Single({select}) {
    var i = localStorage.getItem("select")
    let saveSelect = JSON.parse(JSON.parse(i))
    console.log(saveSelect.images)

    const displayImage = () => {
        const res = saveSelect.images.slice(1)
        return (
            
            res.map((i, index) => {
                return (
                    //<img src={i.href} className="d-block w-100" alt={index} />
                    <div className="carousel-item">
                    <img src={i.href} className="d-block w-100" alt={index} />
                    </div> 
                )
            })
        )
    }

    const displayButton = () => {
        const res = saveSelect.images.slice(1)
        return (
        res.map((i, index)=> {
             return (
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index+1}></button>
            )
        })
        )
    }
    return (
        <div>
            <div className="container-fluid bg-light p-5 text-center">
                <h1>{saveSelect.name}</h1>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide align-self-center w-50 mx-auto" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                    {displayButton()}
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={saveSelect.images[0].href} className="d-block w-100" alt="0" />
                    </div>
                    {displayImage()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <button type="button" className="btn btn-secondary">
                    <Link to="/"
                        className="card-text"
                        style={{color: "white"}}>Return
                    </Link>
                </button>

            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        select: state.selectedItem
    }
}

// function Single(props) {
//     let [users, setUsers] = useState({})
//     let [user, setUser] = useState({})
//     let id = useParams()['id']

//     useEffect(()=> {
//         getData()
//     }, [])


//     const getData= async ()=>{
//         await fetch('result.json'
//         ,{
//           headers : { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//            }
//         }
//         )
//           .then(function(response){
//             return response.json();
//           })
//           .then(function(myJson) {
//             let i = myJson['groups'].filter(i => i.id === id)
//             setUsers(myJson)
//             setUser(i)
//           });
        
//       }
    

//     return (
//         <div>
//             <div>{user[0] && (
//                 <div>
//                     <p>{user[0].id}</p>
//                     <img src={user[0].images[0].href} />
//                 </div>
//             )}</div>
//         </div>
//     )
// }

export default connect(mapStateToProps, null)(Single);