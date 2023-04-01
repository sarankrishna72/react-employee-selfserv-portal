export const employeeTableData = {
    maping:{
        "Employee ID": "id",
        "Email": "email",
        "Name": "name",
        "Designation": "designation",
        "Status": "status",
        "Action": 'actions'
    },
    data: [
        {
            "id": "EMP-1",
            "name": "Sarathchandran PR",
            "email": "sarath@flogic.in",
            "image": "https://i.pravatar.cc/300?u=rogahn.dovie@example.org",
            "designation": "team_lead",
            "status": "Active",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "View",
                    "id": "view"
                },
                {
                    "name": "Delete",
                    "id": "delete"
                }
            ]
        },{
            "id": "EMP-2",
            "name": "Anusmitha",
            "email": "anusmitha@flogic.in",
            "image": "https://i.pravatar.cc/300?u=rogahn.dovie@example.org",
            "designation": "hr_manager",
            "status": "Probation",
             "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "View",
                    "id": "view"
                },
                {
                    "name": "Delete",
                    "id": "delete"
                }
            ]
        }, {
            "id": "EMP-3",
            "name": "Akhil Sasidharan",
            "email": "akhil@flogic.in",
            "image": "https://i.pravatar.cc/300?u=rogahn.dovie@example.org",
            "designation": "senior_ui_developer",
            "status": "Active",
             "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "View",
                    "id": "view"
                },
                {
                    "name": "Delete",
                    "id": "delete"
                }
            ]
        },{
            "id": "EMP-4",
            "name": "Shafna CH",
            "email": "shafna@flogic.in",
            "image": "https://i.pravatar.cc/300?u=rogahn.dovie@example.org",
            "designation": "senior_project_manager",
            "status": "Active",
             "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "View",
                    "id": "view"
                },
                {
                    "name": "Delete",
                    "id": "delete"
                }
            ]
        }
    ]
}




export const employeeAttendanceTableData = {
    maping:
    {
        "Date": "date",
        "Punched in": "punched_in",
        "In Geolocation": "geo_location",
        "Punched out": "punched_out",
        "Out Geolocation": "out_geo_location",
        "Behaviour": "behaviour",
        "Total hours": 'total_hours',
        "Entry": "entry",
        "Actions": 'actions'
    },
    data: [
        {
            "id": "EMP-1",
            "date": "05-12-2022",
            "punched_in": "11:33 AM, Today",
            "geo_location": "Electronic city",
            "out_geo_location": "Electronic city",
            "behaviour": "Late",
            "entry": "single",
            "total_hours": "07:00",
            "punched_out": "6:33 PM, Today",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Change Log",
                    "id": "change_log"
                }
            ]
        },
        {
            "id": "EMP-2",
            "date": "05-12-2022",
            "punched_in": "11:33 AM, Today",
            "geo_location": "Electronic city",
            "out_geo_location": "Electronic city",
            "behaviour": "Late",
            "entry": "single",
            "total_hours": "07:00",
            "punched_out": "6:33 PM, Today",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Change Log",
                    "id": "change_log"
                }
            ]
        },
        {
            "id": "EMP-3",
            "date": "05-12-2022",
            "punched_in": "11:33 AM, Today",
            "geo_location": "Electronic city",
            "out_geo_location": "Electronic city",
            "behaviour": "Late",
            "total_hours": "07:00",
            "entry": "single",
            "punched_out": "6:33 PM, Today",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Change Log",
                    "id": "change_log"
                }
            ]
        }
    ]
}


export const employeeLeaveTableData = {
    maping:
    {
        "Date & Time": "leave_date",
        "Leave Duration": "duration",
        "Leave Type": "leave_type",
        "Attachments": "attachments",
        "Status": "status",
        "Actions": 'actions',
    },
    data: [
        {
            "id": "EMP-1-1",
            "leave_date": "05-12-2022 ",
            "duration": "1 Day",
            "leave_type": "Casual Leave",
            "attachments": "-",
            "status": "Approved",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Change Log",
                    "id": "change_log"
                }
            ]
        },
        {
            "id": "EMP-1-2",
            "leave_date": "06-12-2022 ",
            "duration": "1 Day",
            "leave_type": "Sick Leave",
            "attachments": "-",
            "status": "Pending",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Change Log",
                    "id": "change_log"
                }
            ]
        },
        {
            "id": "EMP-1-3",
            "leave_date": "07-12-2022 ",
            "duration": "1 Day",
            "leave_type": "Casual Leave",
            "attachments": "-",
            "status": "Rejected",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Change Log",
                    "id": "change_log"
                }
            ]
        }
    ]
}

export const employeeDesignationTableData = {
    maping:
    {
        "Name": "name",
        "Description": "description",
        "No. of Employees": "employees_count",
        "Status": "status",
        "Actions": 'actions',
    },
    data: [
        {
            "id": "designation-1",
            "name": "HR Manager",
            "description": "-",
            "employees_count": "1",
            "status": "Active",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Delete",
                    "id": "delete"
                }
            ]
        },
        {
            "id": "designation-2",
            "name": "Team Lead",
            "description": "-",
            "employees_count": "1",
            "status": "Active",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Delete",
                    "id": "delete"
                }
            ]
        },
        {
            "id": "designation-3",
            "name": "Project Manager",
            "description": "-",
            "employees_count": "4",
            "status": "Deactivated",
            "actions": [
                {
                    "name": "Edit",
                    "id": "edit"
                },
                {
                    "name": "Delete",
                    "id": "delete"
                }
            ]
        }
    ]
}