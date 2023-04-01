export const DepartmentTableData = {
    maping:
    {
        "Name": "name",
        "Manager": "manager",
        "Description": "description",
        "Created": "created_at",
        "Status": "status",
        "Actions": 'actions',
    },
    data: [
        {
            "id": "department-1",
            "name": "HR",
            "description": "-",
            "manager": "Anusmitha",
            "created_at": "01/02/2022",
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
        }, {
            "id": "department-2",
            "name": "UI/UX",
            "description": "-",
            "manager": "SANJO",
            "created_at": "01/02/2022",
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
        }, {
            "id": "department-3",
            "name": "FRONT END",
            "description": "--",
            "manager": "SARATH",
            "created_at": "01/02/2022",
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
        }, {
            "id": "department-4",
            "name": "BACKEND",
            "description": "-",
            "manager": "--",
            "created_at": "01/02/2022",
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
       
    ]
}


export const WorkshiftTableData = {
    maping:
    {
        "Name": "name",
        "Type": "type",
        "Start at": "start_at",
        "End at": "end_at",
        "Description": "description",
        "Status": "status",
        "Actions": 'actions',
    },
    data: [
        {
            "id": "workshift-1",
            "name": "Regular Shift",
            "description": "-",
            "type": "Regular",
            "start_at": "10:00 AM",
            "end_at": "06:00 PM",
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
        }, {
            "id": "workshift-2",
            "name": "Night Shift",
            "description": "-",
            "type": "Night",
            "start_at": "06:00 PM",
            "end_at": "02:00 AM",
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
        }
       
    ]
}


export const HolidayTableData = {
    maping:
    {
        "Name": "name",
        "Date": "date",
        "Type": "type",
        "Description": "description",
        "Actions": 'actions',
    },
    data: [
        {
            "id": "holiday-1",
            "name": "Christmas",
            "description": "-",
            "type": "Holiday",
            "date": "2022/12/25",
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
        },{
            "id": "holiday-2",
            "name": "Onam",
            "type": "Optional Holiday",
            "description": "-",
            "date": "2022/09/15",
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

