import axios from "axios";
import { useEffect, useState } from "react";

const useCities = () => {
    const url="https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=2500";
    const [cities, setCities] = useState();
    const [citiesError, setCitesError] = useState (null)

    const getCities = () => {
        axios(url)
        .then(data => {
           
            var addedCities = data.data.result.records.map (e => {
                var city = String(e["שם_ישוב"]).trim();
                //if (city.includes(["שבט","יישוב"]))
                if (city==="נצרת עילית") city="נוף הגליל"
                return city.replace(")", "QW").replace("(", ")").replace("QW", "(");
                
            });
            addedCities = addedCities.sort((a, b) => a.localeCompare(b))
            addedCities = addedCities.filter (e => e !== "לא רשום")
            if (!cities) setCities (addedCities);
        })
        .catch(error => setCitesError (error));
    }

    useEffect(() => {
        getCities ();
    }, []);
  
    return {cities, citiesError};
  };
  
  export default useCities;