import HuTags from "../assets/hu_tags.json";

function TagTranslate({language, tag}) {
    if (language == "en") {
        return tag
    } 

    switch (language) {
        case "hu":
            return tagExists(HuTags[tag], tag) 
            break;
    
        default:
            return tag
            break;
    }
}

function tagExists(tag, fallback_tag) {
    return tag ? tag : fallback_tag
}   

export default TagTranslate