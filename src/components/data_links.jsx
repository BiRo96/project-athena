import { CircleFlag, CircleFlagLanguage } from "react-circle-flags"
import FormatIcon from "./format_icon"

/**
 * DataLinks
 * 
 * @param {string} title
 * @param {string} url
 * @param {string[]} tags
 * @param {string} format
 * @param {string} source
 * @param {string} language
 * @param {string} recordDate
 * @param {string} sourceDate
 * @returns {JSX.Element}
 */
function DataLinks({
    title = "", 
    url = "",
    tags = "",
    format = "",
    source = "",
    language = "",
    recordDate = "",
    sourceDate = ""
}) {
    return (
        <div className="flex flex-col mt-4 border-t-2 border-b-2 p-4">
            <a href={url} target="_blank" rel="noopener noreferrer">

                <h2 className="text-2xl font-bold">{title}</h2>
                
                <div className="flex flex-row gap-1.5 mb-2 p-2">
                    <div className="flex flex-col justify-center"><FormatIcon format={format}/></div>
                    <div className="flex flex-col justify-center">{source}</div>
                </div>

                <p>{tags.map(tag => {
                    return <span className="mr-1 pb-1 pt-0 px-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-200" key={tag}>{tag}</span>  
                })}</p>
                
                <div className="flex flex-row gap-8 mt-4 mb-2">
                    <div className="flex flex-col justify-center text-center">
                        <CircleFlag countryCode={language} title={language} alt={language} className="w-6 h-6 my-3" />
                    </div>
                    <div className="flex flex-col justify-center text-center">
                        <p>
                            Bejegyzési idő: 
                        </p>
                        <p>
                            {recordDate}
                        </p>
                    </div>
                    {
                        sourceDate !== "" &&
                        <div className="flex flex-col justify-center text-center">
                            <p>
                                Forrás megjelenési ideje: 
                            </p>
                            <p>
                                {sourceDate}
                            </p>
                        </div>
                    }
                </div>
            </a>
        </div>
    )
}

export default DataLinks