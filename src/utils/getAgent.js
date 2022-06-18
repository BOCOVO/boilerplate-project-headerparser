/**
 * Return agent data
 * 
 * @param {Request} req 
 * @returns 
 */
function getAgent(req){
    return  {
        "ipaddress": req.ip,
        "language": req.headers['accept-language'],
        "software": req.headers['user-agent']
    }
}

module.exports = getAgent
