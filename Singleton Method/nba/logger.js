class Logger {
    
    constructor() {
        this.logs = []
        this.instance = null;
    }

    static getInstance() {
        return this.instance = this.instance || new Logger();
    }

    log(responseStatus, resource, details) {
        const timestamp = new Date();
        this.logs.push({
            timestamp,
            responseStatus,
            resource,
            details: responseStatus === 200 ? details : "NA"
        })

        console.log(`${resource}: Request ${responseStatus === 200 ? 'Successfull' : 'Rejected'} at ${timestamp}`);
        console.log(`${responseStatus === 200 ? `Fetched Info: ${details}` : 'Failed to Fetch Information'}`);
        console.log("*" + '='.repeat(75) + "*");
    }

    export(startId, endId) {
        const logs = this.logs.slice(startId, endId);
        return logs;
    }
}

module.exports = Logger;