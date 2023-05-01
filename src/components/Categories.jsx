import "../styles/Categories.css"


const Categories = () => {
let  links  = [
     {link:"All"},
     {link : "Music" },
     {link : "Netflix" },
     {link : "Cricket" },
     {link : "Arijith Sing" },
     {link : "Bollywood" },
     {link : "News" },
     {link : "Comedy" },
     {link : " T-series" },
     {link : "More" },

]

    return ( 
        <div className="Categories">
            <div className="categoires_list">
                <ul>

                    {
                        links.map  ((data)     =>
                        {
                            return(
                                <div>
                                   <li><a href="">{data.link}</a></li>

                                </div>
                            )
                        })
                    }
                </ul>

            </div>






        </div>





     );
}
 
export default Categories;