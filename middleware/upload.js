const path =require ('path')
const multer = requre ('multer')

var storage =multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'uplads/')
    },
    filename: function(req, file, cb) {
        let ext =path.extname(file.originalname)
        cb(null, Date.now() +ext )
    }
})

var upload = multer ({
    storage: storage,
    fileFilter: function(req, file, callback){
        if( file.minetyoe == "image/png" || file.minetype == "image/jpg")
        {
            callback (null, true)
        }
        else 
        {
            console.log('only jpg &png files supported')
            callback (null,false)
        }
    },
    limits: {
        fileSize: 1024 *1024 *2 //2mb file allowed
    }
})

module.exports= upload





