import * as Yup from 'yup'

export const loginValidate = () => Yup.object({
    email: Yup.string().trim()
    .email('Email khong hop le')
    .required('Email la bat buoc'),

    password: Yup.string().trim()
    .min(6, 'Khong it hon 6 ky tu')
    .required('Password la bat buoc'),

    name: Yup.string().trim()
    .required('Name la bat buoc'),

    fullName: Yup.string().trim()
    .required('fullName la bat buoc'),

    confirmPassword: Yup.string().trim()
    .required('confirmPassword la bat buoc')
    .oneOf([Yup.ref("password"),null], "Mat khau k khop"),

    cb: Yup.boolean().oneOf(
        [true],
        "ban dong y voi dieu kien"
    )
})