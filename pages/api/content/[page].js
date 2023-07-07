import * as fs from 'fs'
import path from 'path';

export default function handler(req, res) {
    const { page } = req.query ;
    const pageContentDirectory = path.join(process.cwd(), 'content');
    if(page == "Untitled"){
        res.end(JSON.stringify({"File" : "BOŞ DOSYA"}))
    }
    fs.readFile(pageContentDirectory + '/'+page+'.json', 'utf8', (err, data) => {
        if(err != null){
            res.end('#DATA NOT FOUND');
        }(
        res.end(JSON.stringify(data)));
    });
}