const getAgent = require("../utils/getAgent");


async function whoami(req, res) {
    const agent = getAgent(req)
    res.json(agent);
}

module.exports = whoami