import { useEffect, useState } from "react";
import DataLinks from "../components/data_links"
import { fetchDataFromAPI } from "../helpers/data_api";

function Contents() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchDataFromAPI().then(setData).catch(console.error);
        console.log(data);
        
    }, []);

    function dataLinks(datas) {
        
        if (Array.isArray(datas)) {
            // sort data by recordDate
            const sortedDatas = datas.sort((a, b) => {
                const dateA = new Date(a.recordDate);
                const dateB = new Date(b.recordDate);
                return dateB - dateA;
            });

            return sortedDatas.map(element => {
                    
                return <DataLinks 
                    key={element.url}
                    title={element.title}
                    url={element.url}
                    tags={element.tags}
                    format={element.format}
                    source={element.source}
                    language={element.language}
                    recordDate={element.recordDate}
                    sourceDate={element.sourceDate}
                /> 
            })
        } else {
            return "";
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-bold">Tartalmi részleg</h1>
            
            <div className="flex flex-col">
                {
                    dataLinks(data)
                }
                
            </div>
        </div>
    )
}

export default Contents