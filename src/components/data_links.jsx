import { CircleFlag, CircleFlagLanguage } from "react-circle-flags"
import FormatIcon from "./format_icon"
import TagTranslate from "./tag_translate"

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
                <h2 className="text-2xl font-bold hover:underline">{title}</h2>
            </a>
            
            <div className="flex flex-row gap-1.5 mb-2 p-2">
                <div className="flex flex-col justify-center"><FormatIcon format={format}/></div>
                <div className="flex flex-col justify-center">{source}</div>
            </div>

            <p className="flex flex-row flex-wrap gap-1">
                {tags.map(tag => {
                    return (
                        <span className="mr-1 pb-1 pt-0 px-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-200" key={tag}>
                            <TagTranslate language={language} tag={tag}/>
                        </span>
                    )  
                })}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 mt-4 mb-2">
                <div className="flex flex-col justify-center text-center">
                    <CircleFlagLanguage languageCode={language} title={language} alt={language} className="w-6 h-6 my-3" />
                </div>
                <div className="flex flex-col justify-center text-center">
                    <p>
                        Bejegyzési idő: 
                    </p>
                    <p>
                        {recordDate !== "" && Intl.DateTimeFormat('hu-HU').format(new Date(recordDate.slice(0, 4) + "-" + recordDate.slice(5, 7) + "-" + recordDate.slice(8, 10)))}
                    </p>
                </div>
                {
                    sourceDate !== "" &&
                    <div className="flex flex-col justify-center text-center">
                        <p>
                            Forrás megjelenési ideje: 
                        </p>
                        <p>
                            {sourceDate !== "" && Intl.DateTimeFormat('hu-HU').format(new Date(sourceDate.slice(0, 4) + "-" + sourceDate.slice(5, 7) + "-" + sourceDate.slice(8, 10)))}
                        </p>
                    </div>
                }
                <div className="flex flex-col justify-center text-center" >
                    <button className="text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {navigator.clipboard.writeText(url)}}>Link másolása vágólapra</button>
                </div>
            </div>
        </div>
    )
}

export default DataLinks