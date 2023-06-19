const { formalContribution, formalScope } = require("../controllers/FormaContribution")
const { querDashboard } = require("../controllers/dashboard")


module.exports = (app)=>{
    app.get('/api/get-dashboard',querDashboard)
    app.post('/api/post-formal-contribution',formalContribution)
    app.post('/api/post-formal-scope',formalScope)
}