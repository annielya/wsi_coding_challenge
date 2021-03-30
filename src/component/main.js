import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {select, search} from '../action'

function Main({data,  select, search}) {
    console.log(data)



    const displayData = () => {
        return (
            data.map(i => {
                return (
                    <div className="container-fluid" key={i.id}>
                        <div className="card mb-3">
                            <div className="row no-gutters">
                            
                                <div className="col-md-4">
                                    <img src={i.hero.href} alt="image"
                                        className="card0image img img-fluid"/>
                                </div>

                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 className="card-title">{i.name}</h3>
                                        {i.price !== undefined ? (
                                            <div className="mb-4 mt-4">
                                                {i.price.regular > i.price.selling ? (
                                                    <div className="mb-4">
                                                    <h6 className="card-text"><del>Regular Price: {i.price.regular}</del></h6>
                                                    <h5 className="card-text fw-bolder">Selling Price: {i.price.selling} </h5>  
                                                    </div>  
                                                    
                                                ) : (
                                                    
                                                       <h5 className="card-text fw-bolder">Selling Price: {i.price.selling} </h5> 
                                                                                                
                                                )}  
                                            </div>                                        
                                        ) : (
                                            

                                            <div className="mb-4 mt-4">
                                            {i.priceRange.selling.high > i.priceRange.selling.low ? (
                                                    <div className="mb-4">
                                                        <h6 className="card-text"><del>Regular Price: {i.priceRange.selling.high}</del></h6>
                                                        <h5 className="card-text fw-bolder">Selling Price: {i.priceRange.selling.low} </h5>  
                                                    </div>  
                                                
                                            ) : (
                                                <h5 className="card-text fw-bolder">Selling Price: {i.priceRange.selling.high} </h5> 
                                            )}  
                                            </div>
                                        )}

                                        <div className="mb-4">
                                            <h6 className="card-text">Average ratings: {i.reviews.averageRating} </h6>
                                            <h6 className="card-text">Recommendation Count: {i.reviews.reviewCount} </h6>
                                        </div>

                                        <button type="button" className="btn btn-secondary">
                                            <Link to={i.id} 
                                            onClick={()=> select(i.id)}
                                            className="card-text"
                                            style={{color: "white"}}>See Details</Link></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })
        )

    }
    return (
        <div>
            <div className="container-fluid bg-light p-5 text-center">
                <h1>All products</h1>
            </div>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand text-center">Shop By Category</h2>
                    <button type="button" 
                        className="btn btn-outline-secondary col-2"
                        onClick={()=> {search("lamp")}}>Lamp</button>
                    <button type="button" 
                        className="btn btn-outline-secondary col-2"
                        onClick={()=> {search("rug")}}>Rug</button>
                    <button type="button" 
                        className="btn btn-outline-secondary col-2"
                        onClick={()=> {search("storage")}}>Storage Set</button>
                    <button type="button" 
                        className="btn btn-outline-secondary col-2"
                        onClick={()=> {search("")}}>Show All</button>
                </div>
            </nav>
            <div className="input-group mb-3">
                <input type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Search..."
                    onChange={(e)=>{search(e.target.value)}} />
            </div>

            {displayData()}
        </div>
    )
}

const mapStateToProps=(state) => {
    return {
        data: state.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        select: (id) => dispatch(select(id)),
        search: (val) => dispatch(search(val))
    }
}

// function Main() {
//     let [user, setUser] = useState({})
//     let arr = []

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
//             setUser(myJson)
//           });
//       }


//     const displayUser = () => {
//         return (
//             user['groups'] && user["groups"].map(key=> {
//                 return (
//                     <div key={key.id}>
//                         <img src={key.images[0].href} />
//                         <p>{key.name}</p>
//                         <Link to= {{
//                             pathname: `${key.id}`,
//                             user
//                         }}
//                         >{key.name}</Link>
//                     </div>
//                 )
//             })
//         )
//     }

    

//     return (
//         <div>
//             {displayUser()}
//         </div>
//     )
// }

export default connect(mapStateToProps, mapDispatchToProps)(Main);