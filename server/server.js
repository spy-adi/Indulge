const express = require("express");
const auth = require("./middleware/auth");
const app=express();
const db=require("./models");
const authRoute = require("./routes/auth");
const btechProgRoute = require("./routes/btechProgRoute");
const companyDetailsRoute = require("./routes/companyDetailsRoute");
const ddIntProgsRoute = require("./routes/ddIntProgsRoute");
const infHrDetailsRoute = require("./routes/infHrDetailsRoute");
const infRoute = require("./routes/infRoute");
const internDetailsRoute = require("./routes/internDetailsRoute");
const internSelectionProcedureRoute = require("./routes/internSelectionProcedureRoute");
const jnfHrDetailsRoute = require("./routes/jnfHrDetailsRoute");
const jnfRoute = require("./routes/jnfRoute");
const jobSelectionProcedureRoute = require("./routes/jobSelectionProcedureRoute");
const mbaProgRoute = require("./routes/mbaProgRoute");
const mscProgRoute = require("./routes/mscProgRoute");
const mtechProgRoute = require("./routes/mtechProgRoute");
const phdProgRoute = require("./routes/phdProgRoute");
const salaryDetailsRoute = require("./routes/salaryDetailsRoute");
const skillBasedProgRoute = require("./routes/skillBasedProgRoute");
const infBtechRoute = require("./routes/infBtechRoute");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/api/auth",authRoute);
app.use("/api/infBtech",infBtechRoute);
app.use("/api/btechProg", btechProgRoute);
app.use("/api/companyDetails", companyDetailsRoute);
app.use("/api/ddIntProgs", ddIntProgsRoute);
app.use("/api/infHrDetails", infHrDetailsRoute);
app.use("/api/inf", infRoute);
app.use("/api/internDetails", internDetailsRoute);
app.use("/api/internSelectionProcedure", internSelectionProcedureRoute);
app.use("/api/jnfHrDetails", jnfHrDetailsRoute);
app.use("/api/jnf", jnfRoute);
app.use("/api/jobSelectionProcedure", jobSelectionProcedureRoute);
app.use("/api/mbaProg", mbaProgRoute);
app.use("/api/mscProg", mscProgRoute);
app.use("/api/mtechProg", mtechProgRoute);
app.use("/api/phdProg", phdProgRoute);
app.use("/api/salaryDetails", salaryDetailsRoute);
app.use("/api/skillBasedProg", skillBasedProgRoute);

const PORT = process.env.PORT||5000;
db.sequelize.sync({force:false})
.then(()=>{
    app.listen(PORT,()=>{
        console.log("server listening on port 5000");
    })
})
.catch((err)=>{
    console.error(err);
});



