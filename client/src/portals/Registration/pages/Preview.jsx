import React, { useContext,useEffect } from "react";
import { Divider, Layout } from "antd";
import { tableIcons} from "../../../CommonComponents";
import AuthContext from "../../../context/auth/authContext";
import InfContext from "../../../context/inf/infContext";
import Spinner from "../../../CommonComponents/Spinner";
import MaterialTable from "material-table";
const { Content } = Layout;


function JNF() {
  const authContext = useContext(AuthContext);
  const infContext = useContext(InfContext);
  const {user}  = authContext;
  const {getInfss,infs} = infContext;
  useEffect(()=>{
    getInfss(user.id);
  },[]);
  if(infs===[]) return <Spinner/>
  const columns=[
    { title: "Company Name", field: "name" },
    { title: "Job Designation", field: "jd" },
    // { title: "HR", field: "hr" },
    // { title: "Location", field: "location" },
    { title: "Posted On", field: "postedOn", type: "Date" },
    {title:"Details",filed:"url",render:(rowData)=>(
        <a href={rowData.url}>View</a>
      )},
  ];

  const dataJNF = [
  // { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 0, url:"/reg/preview/placement/job_id" },
  // { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 1, url:"/reg/preview/placement/job_id"},
  // { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 2, url:"/reg/preview/placement/job_id" },
  // { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 3, url:"/reg/preview/placement/job_id"}
];

//  = infs===[]?[]:infs[0].map(inf=>{return {name:user.cname,jd:inf.intern_designation,postedOn:inf.createdAt.substring(0,10),url:`/reg/preview/placement/${inf.id}`}});
  //   { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 0, url:"/reg/preview/intern/job_id" },
  //   { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 1, url:"/reg/preview/intern/job_id" },
  //   { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 2, url:"/reg/preview/intern/job_id" },
  //   { name: "ABC", jd: "Mehmet", hr: "Baran", postedOn: "dd/mm/yy", location: "WFH", id: 3, url:"/reg/preview/intern/job_id" }
  // ];
// ];
const dataINF=[ {name:"TATA",jd:"Analyst",postedOn:"2022-03-03",url:`/reg/preview/intern/5465465786754`}];


  return (
        <Content style={{ margin: "10px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding:"24px",minHeight: 400 }}
          >
            <MaterialTable
                  title="INF"
                  data={dataINF}
                  columns={columns}
                  icons={tableIcons}
                  options={{
                    search:true,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: "#002140",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    },
                    actionsColumnIndex: -1, 
                    addRowPosition: "first"
                  }}
                />
                <Divider />
                <MaterialTable
                  title="JNF"
                  data={dataJNF}
                  columns={columns}
                  icons={tableIcons}
                  options={{
                    search:true,
                    paging: false,
                    draggable: false,
                    sorting: false,
                    headerStyle: {
                      backgroundColor: "#002140",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      fontFamily: "Open Sans",
                    },
                    actionsColumnIndex: -1, 
                    addRowPosition: "first"
                  }}
                />
            </div>
        </Content>
  );
}

export default JNF;