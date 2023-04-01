export const myProfileInputs = [
    {
        id: "first_name",
        name: 'first_name',
        label: 'First name',
        placeholder: 'Not added yet',
        required: true,
        isShowLabel: false,
        type: 'text',
        autoComplete: 'off',
        errorMessages: {
            valueMissing: 'Please enter your first name',
        }
    },
    {
        id: "last_name",
        name: 'last_name',
        label: 'Last name',
        placeholder: 'Not added yet',
        required: true,
        isShowLabel: false,
        type: 'text',
        autoComplete: 'off',
        errorMessages: {
            valueMissing: 'Please enter your last name',
        }
    },
    {
        id: 'email',
        name: 'email',
        label: 'Email',
        placeholder: 'Not added yet',
        readOnly: true,
        type: 'email',
        required: true,
        isShowLabel: false,
        autoComplete: 'off',
        pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
        errorMessages: {
            patternMismatch: 'Invalid email',
            valueMissing: 'This field is required',
            typeMismatch: 'Invalid email'
        }
    },
    {
        id: "gender",
        name: 'gender',
        label: 'Gender',
        required: true,
        isShowLabel: false,
        type: 'radio',
        autoComplete: 'off',
        value: 'male',
        groups: [
            {
                id: 'male',
                name: 'Male'
            },{
                id: 'female',
                name: 'Female'
            }
        ]
    },
    {
        id: "phone_number",
        name: 'phone_number',
        label: 'Phone number',
        placeholder: 'Not added yet',
        required: true,
        type: 'text',
        isShowLabel: false,
        value: "",
        pattern: "[6789][0-9]{9}",
        autoComplete: 'off',
        errorMessages: {
            valueMissing: 'Please enter your phone number',
            
        }
    },
    {
        id: "date_of_birth",
        name: 'date_of_birth',
        label: 'Date of Birth',
        placeholder: 'Not added yet',
        required: true,
        type: 'date',
        isShowLabel: false,
        autoComplete: 'off',
        errorMessages: {
            valueMissing: 'Please enter your dob',
            
        }
    },
    {
        id: "address",
        name: 'address',
        label: 'Address',
        placeholder: 'Not added yet',
        required: false,
        type: 'textarea',
        isShowLabel: false,
        autoComplete: 'off',
        rows: "2",
        errorMessages: {
            valueMissing: 'Please enter your address',
        }
    },
    {
        id: "aboutme",
        name: 'aboutme',
        label: 'About me',
        placeholder: 'Add about me here',
        required: false,
        type: 'textarea',
        isShowLabel: false,
        autoComplete: 'off',
        rows: "2",
        
    },
   
]


export const changePasswordnputs = [
    {
        id: "old_password",
        name: 'old_password',
        label: 'Old password',
        placeholder: 'Enter old password',
        required: true,
        type: 'password',
        isShowLabel: false,
        value: "",
        autoComplete: 'off',
        errorMessages: {
            valueMissing: 'Please enter your password',
        }
    },{
        id: "new_password",
        name: 'new_password',
        label: 'New password',
        placeholder: 'Enter new password',
        required: true,
        type: 'password',
        isShowLabel: false,
        value: "",
        autoComplete: 'off',
        errorMessages: {
            valueMissing: 'Please enter your password',
        }
    },{
        id: "confirm_password",
        name: 'confirm_password',
        label: 'Confirm password',
        placeholder: 'Enter confirm password',
        required: true,
        type: 'password',
        isShowLabel: false,
        value: "",
        autoComplete: 'off',
        errorMessages: {
            valueMissing: 'Please enter your password',
        }
    }
]
