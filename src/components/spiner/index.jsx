

const Spiner = ({ style }) => {
    var loaded = '';

    switch (document.readyState) {
        case "loading":
            // The document is still loading.
            break;
        case "interactive":
            // The document has finished loading. We can now access the DOM elements.
            // But sub-resources such as scripts, images, stylesheets and frames are still loading.
            break;
        case "complete":
            // The page is fully loaded.
            loaded = 'hidden';
            break;
        default:
            console.log('spining');
    }

    return (
        <div className={"flex justify-center items-center bg-sideColor " + loaded + " " + style} >
            <div className={"animate-spin rounded-full h-32 w-32 border-b-2 border-primary "}></div>
        </div >
    )

}

export default Spiner;