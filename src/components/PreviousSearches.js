import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function PreviousSeaches() {
    const searches = ['pizza','burger','pasta','salad','cookies','beef','pork','fish','vegetarian','vegan','dessert'];
    
    return (
        <div className="previous-searches">
                <h2> Previous Searches </h2>
                <div className="previous-searches-container">
                    {searches.map((search,index) => (
                        <div 
                        key={index}
                        style={{animationDelay: index * .1 + "s"}}
                        className="search-item section"> {search} 
                        </div>
                    )) }
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search for recipes" />
                    <button className="btn"> 
                        <FontAwesomeIcon icon={faSearch} />
                    </button>       
                </div>
            </div>
    )
}