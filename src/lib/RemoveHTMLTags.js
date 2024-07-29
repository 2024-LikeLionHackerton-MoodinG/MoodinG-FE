const RemoveHTMLTags = (html) => {
    const doc = new DOMParser().parseFromString(html,"text/html");
    return doc.body.textContent || "";
}

export default RemoveHTMLTags;