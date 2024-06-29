document.addEventListener("DOMContentLoaded", function() {
    const imageUrl = "https://storage.googleapis.com/second-petal-295822.appspot.com/elements/elements%3A571bb47e9cbad97ef71e3e8f0b57d61a2b5d8bb36d9e7ef936e498caf6c92eb1.png";
    const createEraserFileUrl = "https://app.eraser.io/new?elementData=W3sidHlwZSI6ImRpYWdyYW0iLCJkaWFncmFtVHlwZSI6InNlcXVlbmNlLWRpYWdyYW0iLCJjb2RlIjoi7ZmU7J207Yq467O065Oc7J6F64uI64ukLiJ9XQ%3D%3D";
    
    const whiteboardImage = document.getElementById('whiteboardImage');
    const whiteboardLink = document.getElementById('whiteboardLink');

    whiteboardImage.src = imageUrl;
    whiteboardLink.href = createEraserFileUrl;
});
