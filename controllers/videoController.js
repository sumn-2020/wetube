//rener => home.pug 파일을 찾아서 내보내준다 
export const home = (req, res) => res.render("home", {pageTitle : "Home"});
export const search = (req, res) => res.render("search", {pageTitle : "Sarch"});
export const upload = (req, res) => res.render("upload" ,{pageTitle : "upload"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "videoDetail"});
export const editVideo = (req, res) => res.render("editVideo" ,{pageTitle : "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "SarcdeleteVideoh"});